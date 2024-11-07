// Circle ----> 
type Circle = {
  shape: "circle";
  radius: number;
}

// Rectangle  ---> 
type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
}


function calculateShapeArea(shape:Circle | Rectangle): number {
  if(shape.shape === "circle") {
    return Math.PI * shape.radius *shape.radius;
  }
  else if(shape.shape === "rectangle") {
    return shape.width * shape.height;
  } else {
    console.log("Number is wrong");
    return 0;
  }
}

// circle -->
const circleShape = calculateShapeArea({shape: "circle", radius: 5})
console.log(circleShape);

// rectangle ---> 
const rectangleShape = calculateShapeArea({shape: "rectangle", width: 4, height: 6});
console.log(rectangleShape);