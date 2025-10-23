/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import React from 'react';
import SamplesBrowser from './SamplesBrowser.json';
const currentVersion = SamplesBrowser.version;

// // version from response - first param, local version second param
// const isObsolete = (versionA: string, versionB: string) => {
//   const versionsA = versionA.split(/\./g);
//   const versionsB = versionB.split(/\./g);

//   while (versionsA.length || versionsB.length) {
//     const a = Number(versionsA.shift());
//     const b = Number(versionsB.shift());
//     // eslint-disable-next-line no-continue
//     if (a === b) continue;
//     // eslint-disable-next-line no-restricted-globals
//     const comp = a > b || isNaN(b);
//     console.log('isObsolete ' + a + ' vs ' + b + ' = ' + comp );
//     return comp; // a > b || isNaN(b);
//   }
//   return false;
//   // return versionA !== versionB;
// };

interface SamplesBusterProps {
  children(state: SamplesBusterState): any;
}

export interface SamplesBusterState {
  loading: boolean;
  isLatest: boolean;
  isRefreshed: boolean;
  refreshWebsite(): any;
}

export class SamplesBuster extends React.Component<SamplesBusterProps, SamplesBusterState> {

  constructor(props: SamplesBusterProps) {
    super(props);

    this.state = {
      loading: true,
      isLatest: false,
      isRefreshed: false,
      refreshWebsite: () => {

        if (this.state.isRefreshed) {
           console.log('SB cache refreshed ...')
           return;
        }

        this.setState({ isLatest: true, isRefreshed: true }, () => {
            console.log('SB cache clearing ...')
            if (caches) {
              // Service worker cache should be cleared with caches.delete()
              caches.keys().then(function(names) {
                for (let name of names) caches.delete(name);
              });
            }
            console.log('SB cache hard reloading...')
            // delete browser cache and hard reload
            window.location.reload();
        } );
      }
    };
  }

  public async fetchMetadata(): Promise<string> {
    let metaVersion = '1.0.0';
        let metaURL = '/meta.json';
        let pathname = window.location.pathname;
        // if (pathname !== '/') {
        //     metaURL = pathname + '/meta.json';
        // }
        console.log('SB version location: ' + pathname);
        console.log('SB version public: ' + import.meta.env.BASE_URL);
        try {
          const response = await fetch(metaURL);
          const metaJson = await response.json();  // may error if there is no body
          metaVersion = metaJson.version;
          console.log('SB version: '+ metaURL + ' ver: ' + metaVersion);
        } catch (ex) {
            console.log('SB fetch error \n' + ex);
            // this.loadOfflineData(index, observer);
        }
        return new Promise<string>((resolve, reject) => { resolve(metaVersion); });
  }

  public isObsolete(versionA: string, versionB: string) {
    const versionsA = versionA.split(/\./g);
    const versionsB = versionB.split(/\./g);
    while (versionsA.length || versionsB.length) {
      const a = Number(versionsA.shift());
      const b = Number(versionsB.shift());
      // eslint-disable-next-line no-continue
      if (a === b) continue;
      // eslint-disable-next-line no-restricted-globals
      const comp = a < b || isNaN(b);
      console.log('SB version isObsolete ' + a + ' vs ' + b + ' = ' + comp );
      return comp; // a > b || isNaN(b);
    }
    return false;
  }

  componentDidMount() {

    this.fetchMetadata()
        .then((cachedVersion) => {
          console.log('SB version meta.json file: ' + cachedVersion + ' vs cacheApp.json ' + currentVersion)
          if (this.isObsolete(cachedVersion, currentVersion)) {
            console.log(`SB version changed from  ${cachedVersion} to ${currentVersion}. Forcing refresh`);
            this.setState({ loading: false, isLatest: false });
          } else {
            console.log(`SB version not changed ${currentVersion}. No cache refresh.`);
            this.setState({ loading: false, isLatest: true });
          }
    });
  }

  render() {
    const { loading, isLatest, isRefreshed, refreshWebsite } = this.state;
    return this.props.children({ loading, isLatest, isRefreshed, refreshWebsite });
    // return this.props.children(this.state);
  }

}

// export default SamplesBuster;
