function celsiusTofahrenheit(temperature) {

    let c = (9 / 5) * (temperature + 32);

    let fahrenheit = c.toFixed(2);
    return fahrenheit;
}
let temperatures = 200;
let temperatureResult = celsiusTofahrenheit(temperatures);
console.log(temperatureResult);