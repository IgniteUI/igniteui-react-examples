/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import React from 'react';
// import packageJson from '../package.json';
import packageJson from './CacheApp.json';
// global.appVersion = packageJson.version;
const currentVersion = packageJson.version;


// version from response - first param, local version second param
const isObsolete = (versionA: string, versionB: string) => {
  const versionsA = versionA.split(/\./g);
  const versionsB = versionB.split(/\./g);

  while (versionsA.length || versionsB.length) {
    const a = Number(versionsA.shift());
    const b = Number(versionsB.shift());
    // eslint-disable-next-line no-continue
    if (a === b) continue;
    // eslint-disable-next-line no-restricted-globals
    const comp = a > b || isNaN(b);
    console.log('isObsolete ' + a + ' vs ' + b + ' = ' + comp );
    return comp; // a > b || isNaN(b);
  }
  return false;
  // return versionA !== versionB;
};

interface CacheBusterProps {
  children(state: CacheBusterState): any;
}

export interface CacheBusterState {
  loading: boolean;
  isLatest: boolean;
  isRefreshed: boolean;
  refreshWebsite(): any;
}

export class CacheBuster extends React.Component<CacheBusterProps, CacheBusterState> {

  constructor(props: CacheBusterProps) {
    super(props);

    this.state = {
      loading: true,
      isLatest: false,
      isRefreshed: false,
      refreshWebsite: () => {

        if (this.state.isRefreshed) { return; }

        this.setState({ isLatest: true, isRefreshed: true }, () => {

          console.log('SB clearing cache...')
            if (caches) {
              // Service worker cache should be cleared with caches.delete()
              caches.keys().then(function(names) {
                for (let name of names) caches.delete(name);
              });
            }
            console.log('SB hard reloading...')
            // delete browser cache and hard reload
            window.location.reload(true);
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

    console.log('SB PUBLIC_URL: ' + process.env.PUBLIC_URL);

    // fetch(metaURL)
    console.log('SB fetching: ' + metaURL);

    try {
      const response = await fetch(metaURL);
      console.log('SB fetching: '+ metaURL + ' response: ' + response.status);
      // console.log('fetch response status ' + response.status);
      const metaJson = await response.json();  // may error if there is no body
      metaVersion = metaJson.version;

      // console.log('fetch response text');
    } catch (ex) {
        console.log('SB fetch error \n' + ex);
        // this.loadOfflineData(index, observer);
    }
    return new Promise<string>((resolve, reject) => { resolve(metaVersion); });
  }

  componentDidMount() {

    this.fetchMetadata()
    .then((cachedVersion) => {
      // const cachedVersion = meta.version;
      // const currentVersion = appVersion;
      // const currentVersion = global.appVersion;

      console.log('SB loaded meta.json file: ' + cachedVersion + ' vs ' + currentVersion)
      // const shouldForceRefresh = isObsolete(cachedVersion, currentVersion);
      if (isObsolete(cachedVersion, currentVersion)) {
        console.log(`SB version changed from  ${currentVersion} to ${cachedVersion}. Forcing refresh`);
        this.setState({ loading: false, isLatest: false });
      } else {
        console.log(`SB version not changed ${currentVersion}. No cache refresh needed.`);
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

// export default CacheBuster;
