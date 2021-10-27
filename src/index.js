import World from "./shared/hello-world.js";

const w = new World();

console.log( w.hello() );

w.isNice(false);

console.log(w.goodbye() );
