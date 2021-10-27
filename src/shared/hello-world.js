export default class World {

  nice = true;

  hello = () => {
    return `Hello ${this.nice ? 'beautiful': 'cruel'} World!`;
  }

  goodbye = () => {
    return `Goodbye ${this.nice ? 'beautiful': 'cruel'} World`; 
  }

  isNice = (nice = true) => {
    this.nice = nice;
  }

}