import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherClientService {

  backendServiceUrl = 'https://weather-service-backend.herokuapp.com';
  getCitiesUrl = this.backendServiceUrl + '/cities';
  getForecastForManyCitiesUrl = this.backendServiceUrl + '/forecasts?';

  constructor(private httpClient: HttpClient) { }

  public getCities(): Observable<Array<CityObject>> {
    console.log('WeatherClient -> getCities: ' + this.getCitiesUrl);
    return this.httpClient.get<Array<CityObject>>(this.getCitiesUrl);
  }

  public getForecastForManyCities(cityNames: string[]): Observable<any> {
    let params = new HttpParams();
    params = params.appendAll({'city' : cityNames});
    console.log(this.getForecastForManyCitiesUrl + params.toString());
    return this.httpClient.get(this.getForecastForManyCitiesUrl + params.toString())
  }
}

export interface CityObject {
  name?: string;
  latitude?: number;
  longitude?: number;
}

export interface ForecastObject {
  cityName?: string;
  temperatureInCelsius?: number;
  weatherDescription?: string;
}
