const utils = require('utils')
class Rectangle {
  constructor(x, y) {
    this.x = utils.escapeHtml(x);
    this.y = 'http://www.github.com/'+y;
  }
}
const url = 'http://www.github.com/?foo=шеллы'
const square = new Rectangle(url, "oren");
var decoded = decodeURI(square.x)
