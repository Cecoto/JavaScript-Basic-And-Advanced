function circleArea(radius) {
    let result;
    if (typeof radius == 'number') {
        result = Math.PI * radius ** 2;
        console.log(result.toFixed(2));
    }
    else {
      result = `We can not calculate the circle area, because we receive a ${typeof(radius)}.`
      console.log(result);
    }
   
}

circleArea(5);
circleArea(false);
circleArea("asdasdasd");