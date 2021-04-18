import Hunter from './Hunter';
import Snark from './Snark';

export default class Swamp {
  size: number;
  rocks: string[];
  snark: Snark;
  hunter: Hunter;

  constructor(size: number) {
    this.size = size;
    this.rocks = [];
    this.snark = new Snark();
    this.hunter = new Hunter();
  }

  placeSnark(): void {
    const chooseRandom = () => Math.round((this.size - 1) * Math.random());
    this.snark.x = chooseRandom();
    this.snark.y = chooseRandom();
  }
}
