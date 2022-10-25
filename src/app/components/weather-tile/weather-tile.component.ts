import {Component, Input, OnInit} from '@angular/core';
import {ForecastObject} from "../../services/weather-client.service";

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.css']
})
export class WeatherTileComponent implements OnInit {

  @Input()
  singleForecast: ForecastObject;
  imagePath: string;

  constructor() { }

  ngOnInit(): void {
    this.setIconPath()
  }

  public setIconPath() {
    switch (this.singleForecast.weatherDescription) {
      case 'sun':
        this.imagePath = './assets/img/sun.png';
        break;
      case 'sunAndClouds':
        this.imagePath = './assets/img/sunAndClouds.png';
        break;
      case 'clouds':
        this.imagePath = './assets/img/clouds.png';
        break;
      case 'rain':
        this.imagePath = './assets/img/rain.png';
        break;
      case 'snow':
        this.imagePath = './assets/img/snow.png';
        break;
    }
  }



}
