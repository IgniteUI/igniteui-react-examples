/**
 * Demo-side half of the docs <Sample fitContent> contract
 * (astro-components/src/scripts/sample-widget.ts).
 *
 * The docs host posts { type: 'igd-sample-fit', width?: boolean } into the
 * iframe when it loads. In response we neutralize the viewport-bound sizing
 * this app inherits (shared.v8.css pins #root/html/body/main to height: 100%,
 * and the samples browser chrome plus the shared .container/.sample wrappers
 * chain another height: 100% on top — all of which can only echo the iframe's
 * own height back) and report the content's size with
 * { type: 'igd-sample-height', height, width? } immediately and on every
 * resize. Demos embedded at a fixed height never receive the enable message,
 * so this stays dormant for them and their percentage layouts are untouched.
 */
const FIT_ENABLE = 'igd-sample-fit';
const FIT_REPORT = 'igd-sample-height';

export function initSampleSizeReporter(): void {
    if (typeof window === 'undefined' || window.parent === window) {
        return;
    }

    let reportWidth = false;
    let observer: ResizeObserver | null = null;
    let styled = false;
    // Captured from the host's enable message so replies go back to that exact
    // origin instead of being broadcast to any window that happens to listen.
    let hostOrigin = '*';

    // Right-most element edge, mirroring the host's same-origin measurement:
    // block-level content stretches to the viewport width, so the intrinsic
    // width has to come from the element boxes, not the body itself.
    const measureWidth = (): number | undefined => {
        const body = document.body;
        const left = body.getBoundingClientRect().left;
        let right = left;
        body.querySelectorAll('*').forEach(el => {
            right = Math.max(right, el.getBoundingClientRect().right);
        });
        if (right <= left) {
            return undefined;
        }
        const cs = getComputedStyle(body);
        return right - left + parseFloat(cs.paddingRight || '0') + parseFloat(cs.borderRightWidth || '0');
    };

    const report = () => {
        const height = Math.max(
            document.documentElement.offsetHeight,
            document.body.offsetHeight,
            document.body.scrollHeight,
        );
        window.parent.postMessage(
            { type: FIT_REPORT, height, width: reportWidth ? measureWidth() : undefined },
            hostOrigin,
        );
    };

    window.addEventListener('message', (e: MessageEvent) => {
        if (!e.data || e.data.type !== FIT_ENABLE) {
            return;
        }
        reportWidth = Boolean(e.data.width);
        hostOrigin = e.origin || '*';

        if (!styled) {
            styled = true;
            const style = document.createElement('style');
            // Every link in the height: 100% chain has to be released, otherwise
            // the first one left pinned re-anchors everything below it to the
            // iframe height. !important also beats SamplesBrowser's inline
            // height: 100% on .sbSwitch.
            style.textContent =
                'html, body, #root, main { height: auto !important; overflow: visible !important; }' +
                '.sbRoot, .sbContent, .sbSwitch { height: auto !important; overflow: visible !important; }' +
                '.container, .sample { height: auto !important; overflow: visible !important; }';
            document.head.appendChild(style);
        }

        report();
        if ('ResizeObserver' in window && !observer) {
            observer = new ResizeObserver(report);
            observer.observe(document.body);
        }
    });
}
