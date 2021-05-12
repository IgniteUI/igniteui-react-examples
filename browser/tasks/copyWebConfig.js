const fs = require('fs-extra');

// function copyWebConfig(cb) {
    const webConfigPath = './build/web.config';
    if (fs.existsSync(webConfigPath)) {
        fs.unlinkSync(webConfigPath);
        console.log('copyWebConfig.js deleted old web.config');
    }

    console.log('copyWebConfig.js copied new web.config');
    fs.copySync('./tasks/web.config', webConfigPath);

    // cb();
// }
// exports.copyWebConfig = copyWebConfig;


