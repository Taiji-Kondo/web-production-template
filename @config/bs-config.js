const path = require(`path`); // 安全にパスを解決する
const Settings = require(path.resolve(__dirname, 'settings')); // 初期設定settings.js

const BROWSER_SYNC = {
  files: [
    `${Settings.WP_PATH}assets/css/*.css`,
    `${Settings.WP_PATH}assets/js/*.js`,
    `${Settings.WP_PATH}assets/img/*.`,
    `${Settings.WP_PATH}**/*.php`,
    `${Settings.WP_PATH}**/*.json`,
    `${Settings.WP_PATH}*.html`,
  ],
  ghostMode: {
    clicks: false,
    scroll: false,
    forms: false,
  },
};

// serverの設定
// const server = {
//   baseDir: './public',
//   index: 'index.html',
// };

// proxyの設定
const wp_proxy = Settings.PROXY ?? `http://${Settings.WP_THEME_NAME}.wp/`;
const php_proxy = 'http://0.0.0.0:9999/';

// wpが入るのであればproxyを追加、入らなければserverを追加
Settings.WP ? (BROWSER_SYNC.proxy = wp_proxy) : (BROWSER_SYNC.proxy = php_proxy);

module.exports = BROWSER_SYNC;