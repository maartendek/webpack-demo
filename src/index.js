import World from "./shared/hello-world.js";

const w = new World();

console.log( w.hello() );

w.nice = false;

console.log(w.goodbye() );
