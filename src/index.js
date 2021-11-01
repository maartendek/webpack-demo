import World from "./shared/hello-world.js";
import './index.scss';
import worldImage from './assets/world.svg';

const w = new World();
const div = document.querySelector('#root');

div.innerHTML += `<p>${w.hello()}</p>`;

w.nice = false;

div.innerHTML += `<p>${w.goodbye()}</p>`;

div.innerHTML += `<img src=${worldImage} alt="Hello World" width="300" />`;