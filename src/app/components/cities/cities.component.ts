import { Component, OnInit } from '@angular/core';
import {CityObject, ForecastObject, WeatherClientService} from "../../services/weather-client.service";
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: Array<CityObject>;
  forecastList: Array<ForecastObject>;
  cityNames: string[];

  dropdownList: Array<CityObject>;
  selectedItems: Array<CityObject>;
  dropdownSettings:IDropdownSettings;


  ngOnInit(): void {
    this.weatherClientService.getCities().subscribe(value => {
      this.dropdownList = value
    });

    this.forecastList = [];

    this.cityNames = [];

    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'name',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      limitSelection:5,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  constructor(private weatherClientService: WeatherClientService) {
  }

  getForecastForCities(selectedItems: Array<CityObject>) {
    this.mapArrayCityObjectToArrayCityNames(selectedItems);
    this.weatherClientService.getForecastForManyCities(this.cityNames).subscribe(value => {
      this.forecastList = value
    });
  }

  cleanForecastList() {
    this.forecastList = [];
  }

  mapArrayCityObjectToArrayCityNames(selectedItems: Array<CityObject>) {
    this.cityNames = selectedItems.map((o) => o.name!);
  }
}
