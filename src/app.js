import style from './scss/style.scss';
import message from './js/message';

const header = document.createElement('h1');
header.innerHTML = 'Webpack 4 & Babel 7';

const paragraph = document.createElement('p');
paragraph.innerHTML = message;

const app = document.getElementById('app');
app.prepend(header, paragraph);
