/**
 * nav.json — the navigation tree as a single static, cacheable asset.
 *
 * The sidebar is rendered client-side (src/scripts/nav.ts) from this file
 * instead of being baked into every page: with 950+ samples the tree is
 * ~190KB of HTML, which would otherwise be duplicated into each page.
 */
import { SAMPLES } from '../utils/sample-index';
import { buildNavTree } from '../utils/samples';

export function GET() {
  const groups = buildNavTree(SAMPLES);

  return new Response(JSON.stringify({ groups }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
