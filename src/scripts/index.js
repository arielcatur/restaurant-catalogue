import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './views/pages/page-loader';
import './views/pages/error-message';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

const pageLoader = () => {
  document.querySelector('page-loader').classList.remove('no-anim');
  document.querySelector('page-loader div').classList.add('loader');
  document.body.style.opacity = '0.85';
};
const pageLoaderAfter = () => {
  const loadingTimeout = setTimeout(() => {
    document.querySelector('page-loader').classList.add('no-anim');
    document.querySelector('page-loader div').classList.remove('loader');
    document.body.style.opacity = '1';
    clearTimeout(loadingTimeout);
  }, 1000);
};

window.addEventListener('hashchange', () => {
  pageLoader();
  app.renderPage();
  pageLoaderAfter();
});

window.addEventListener('load', () => {
  pageLoader();
  app.renderPage();
  swRegister();
  pageLoaderAfter();
});
