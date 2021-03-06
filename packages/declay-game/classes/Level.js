import PIXI from "pixi.js";
import Declay from "declay";

@Declay
class Level extends PIXI.Container {
  constructor(parent) {
    this.parent = parent;
    this.map = 1;
    this.health = 10;
  }

  // render declarative enitites
  __addEntities(entities = []) {
    entities.forEach(entity => this.addChild(entity(this)));
  }

  renderMap(map) {}
}

export default Level;
