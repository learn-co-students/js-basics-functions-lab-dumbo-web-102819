// Code your solution in this file!

function distanceFromHqInBlocks(num) {
    if(num > 42) {
      return num - 42;  
    } 
    return 42 - num;
}

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2) {
    return num1 - num2;
}

function distanceTravelledInFeet(num1, num2) {

    if(num2 > num1) {
      return (num2 - num1) * 264;
    } else {
      return (num1 - num2) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if(distance > 2500) {
      return "cannot travel that far";
    } else if (distance > 2000) {
      return 25;
    } else if (distance > 400 && distance < 2000) {
      return (distance - 400) * 0.02;
    }
    return 0;
  }