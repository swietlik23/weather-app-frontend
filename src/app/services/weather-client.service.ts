import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherClientService {

  constructor(private httpClient: HttpClient) { }

  public getCities(): Observable<Array<CityObject>> {
    return this.httpClient.get<Array<CityObject>>('http://localhost:8080/cities');
  }

  public getForecastForManyCities(cityNames: string[]): Observable<any> {
    let params = new HttpParams();
    params = params.appendAll({'city' : cityNames});
    console.log('http://localhost:8080/forecasts?' + params.toString());
    return this.httpClient.get('http://localhost:8080/forecasts?' + params.toString())
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
