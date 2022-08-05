
import SamplesBrowser from './SamplesBrowser.json';

export default class SamplesCache {

    public static clear()
    {
        const browserVersion = SamplesBrowser.version;
        const browserDate = SamplesBrowser.date;

        // const appDate = new Date()
        // const appTime = appDate.toISOString().split('T')[0] + " " + appDate.toTimeString().split(' ')[0];
        console.log('SB built date ' + browserDate)
        console.log('SB built ver: ' + browserVersion)

        this.fetchMetadata()
        .then((cachedVersion) => {
          console.log('SB cache meta.json ver: ' + cachedVersion + ' vs SamplesBrowser.json ver: ' + browserVersion)
        //   if (this.isObsolete(cachedVersion, browserVersion)) {
        //     // console.log('SB cache clearing ...')
        //     // if (caches) {
        //     //   // Service worker cache should be cleared with caches.delete()
        //     //   caches.keys().then(function(names) {
        //     //     for (let name of names) caches.delete(name);
        //     //   });
        //     // }
        //     // console.log('SB cache hard reloading...')
        //     // delete browser cache and hard reload
        //     // window.location.reload();
        //   } else {
        //     console.log(`SB cache no refresh.`);
        //   }
        });

        console.log('SB cache clearing ...')
        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then(function(names) {
            for (let name of names) {
                console.log('SB cache clearing ' + name)
                caches.delete(name);
            }
          });
        }
    }

    public static async fetchMetadata(): Promise<string> {
        let metaVersion = '1.0.0';
        let metaURL = '/meta.json';

        let origin = window.location.origin;
        if (origin.indexOf("localhost") >= 0) {
            metaURL = "http://localhost:4200/meta.json";
        } else if (origin.indexOf("staging.infragistics.com") >= 0) {
            metaURL = "https://staging.infragistics.com/react-demos/meta.json";
        } else  { // we are on production
            metaURL = "https://infragistics.com/react-demos/meta.json";
        }

        console.log('SB cache url: ' + metaURL);
        try {
          const response = await fetch(metaURL);
          const metaJson = await response.json();  // may error if there is no body
          metaVersion = metaJson.version;
        //   console.log('SB version: '+ metaURL + ' ver: ' + metaVersion);
        } catch (ex) {
            console.log('SB cache fetch error \n' + ex);
            // this.loadOfflineData(index, observer);
        }
        return new Promise<string>((resolve, reject) => { resolve(metaVersion); });
    }

    // version from response - first param, local version second param
    public static isObsolete(versionA: string, versionB: string): boolean {
        const versionsA = versionA.split(/\./g);
        const versionsB = versionB.split(/\./g);
        while (versionsA.length || versionsB.length) {
            const a = Number(versionsA.shift());
            const b = Number(versionsB.shift());
            // eslint-disable-next-line no-continue
            if (a === b) continue;
            // eslint-disable-next-line no-restricted-globals
            const comp = a < b || isNaN(b);
            console.log('SB cache isObsolete ' + a + ' vs ' + b + ' = ' + comp );
            return comp; // a > b || isNaN(b);
        }
        return false;
    }
}