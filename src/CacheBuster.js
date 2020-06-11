/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import React from 'react';
// import packageJson from '../package.json';
import packageJson from './CacheApp.json';
global.appVersion = packageJson.version;

// version from response - first param, local version second param
const isObsolete = (versionA, versionB) => {
  const versionsA = versionA.split(/\./g);

  const versionsB = versionB.split(/\./g);
  while (versionsA.length || versionsB.length) {
    const a = Number(versionsA.shift());

    const b = Number(versionsB.shift());
    // eslint-disable-next-line no-continue
    if (a === b) continue;
    // eslint-disable-next-line no-restricted-globals
    return a > b || isNaN(b);
  }
  return false;
};

class CacheBuster extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      isLatestVersion: false,
      refreshCacheAndReload: () => {
        console.log('app clearing cache...')
        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then(function(names) {
            for (let name of names) caches.delete(name);
          });
        }
        console.log('app hard reloading...')
        // delete browser cache and hard reload
        window.location.reload(true);
      }
    };
  }

  componentDidMount() {
    fetch('/meta.json')
      .then((response) => response.json())
      .then((meta) => {
        const cachedVersion = meta.version;
        const currentVersion = global.appVersion;

        console.log('app loaded meta.json file...')
        const shouldForceRefresh = isObsolete(cachedVersion, currentVersion);
        if (shouldForceRefresh) {
          console.log(`app version changed ${cachedVersion} >> ${currentVersion}. Forcing refresh`);
          this.setState({ loading: false, isLatestVersion: false });
        } else {
          console.log(`app version not changed ${cachedVersion}. No cache refresh needed.`);
          this.setState({ loading: false, isLatestVersion: true });
        }
      });
  }
  render() {
    const { loading, isLatestVersion, refreshCacheAndReload } = this.state;
    return this.props.children({ loading, isLatestVersion, refreshCacheAndReload });
  }
}

export default CacheBuster;
