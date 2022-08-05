function celsiusTofahrenheit(temperature) {

    let f = (9 / 5) * (temperature + 32);

    let fahrenheit = f.toFixed(2);
    return fahrenheit;
}
let temperatures = 200;
let temperatureResult = celsiusTofahrenheit(temperatures);
console.log(temperatureResult);