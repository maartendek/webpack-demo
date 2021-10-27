import World from "./shared/hello-world.js";
import './index.scss';

const w = new World();
const div = document.querySelector('#root');

div.innerHTML += `<p>${w.hello()}</p>`;

w.nice = false;

div.innerHTML += `<p>${w.goodbye()}</p>`;
