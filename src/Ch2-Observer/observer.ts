interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
  }

  registerObserver(observer:Observer):void {
    this.observers.push(observer);
  }

  removeObserver(observer:Observer):void {
    let i: number = this.observers.indexOf(observer);
    if (i >= 0) {
      this.observers.slice(i, 1);
    }
  }

  notifyObservers():void {
    for (let observer: Observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(temperature:number, humidity:number, pressure:number):void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display():void {
    console.log("Current conditions: " + this.temperature + "F degrees and " + this.humidity + "% humidity");
  }
}

let weatherData: WeatherData = new WeatherData();
let currentConditionDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);