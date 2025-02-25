type rectangleType = {
  width: number;
  height: number;
};
const getRectangleArea = (rectangle: rectangleType) => {
  return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle: rectangleType) => {
  return 2 * (rectangle.width + rectangle.height);
};
const rectangle = {
    width: 5,
    height: 10
}
console.log(getRectangleArea(rectangle))
console.log(getRectanglePerimeter(rectangle))