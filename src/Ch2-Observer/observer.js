var WeatherData = (function () {
    function WeatherData() {
        this.observers = [];
    }
    WeatherData.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    WeatherData.prototype.removeObserver = function (observer) {
        var i = this.observers.indexOf(observer);
        if (i >= 0) {
            this.observers.slice(i, 1);
        }
    };
    WeatherData.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherData;
}());
var CurrentConditionsDisplay = (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    CurrentConditionsDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("Current conditions: " + this.temperature + "F degrees and " + this.humidity + "% humidity");
    };
    return CurrentConditionsDisplay;
}());
var weatherData = new WeatherData();
var currentConditionDisplay = new CurrentConditionsDisplay(weatherData);
weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
//# sourceMappingURL=observer.js.map