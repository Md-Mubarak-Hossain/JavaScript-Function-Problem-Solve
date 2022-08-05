function fahrenheitToCelsius(temperature) {

    let c = (5 / 9) * (temperature - 32);

    let celsius = c.toFixed(2);
    return celsius;
}
let temperatures = 200;
let temperatureResult = fahrenheitToCelsius(temperatures);
console.log(temperatureResult);
