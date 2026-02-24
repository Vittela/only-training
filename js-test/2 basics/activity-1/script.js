function Point(x, y) {
  this.x = x
  this.y = y
}

let coordinates = new Point(2, 4)

Point.prototype.sum = function () {
  return (
    this.x + this.y
  )
}

console.log(coordinates.sum())
