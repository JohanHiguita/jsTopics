// Public fields
/* class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
} */




// Static fields
class Rectangle {
    height = 0;
    #width;
    constructor(height, width) {
        this.height = height;
        this.#width = width;
    }
}

const r1 = new Rectangle(3,4);
console.log(r1.height);
console.log(r1.width);