// remove .no-js from html tag
document.querySelector('html').classList.remove('no-js');

// polyfills
require('es6-promise').polyfill();

// baseline app styles
require('./css/app.css');
require('./fonts/fonts.css');
require('./css/utilities.css');

// components styles
require('./css/footer/footer.css');
require('./css/header/header.css');
require('./css/content/content.css');
