function squareNumber(num){
    const result = num ** 2;
    console.log(`The result of squaring the number ${num} is ${result}`);
    return result;
}

// squareNumber(3);

function halfNumber(num){
    const result = num / 2;
    console.log(`Half of ${num} is ${result}`);
    return result;
}

// halfNumber(5);

function percentOf(num1, num2){
    const result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}`);
    return result
}

// percentOf(2,4)

function areaOfCircle(radius){
    const result = Math.PI * (radius ** 2)
    console.log(`The area for a circle with radius ${radius} is ${result.toFixed(2)}`);
    return result.toFixed(2);
}

// areaOfCircle(2)

function compute(num){
    const  halfNumberResult = halfNumber(num);
    const squaredNumberVal = squareNumber(halfNumberResult);
    const area = areaOfCircle(squaredNumberVal);
    const percentOfVal = percentOf(area, Math.pow(squaredNumberVal, 2));
}

compute(9);