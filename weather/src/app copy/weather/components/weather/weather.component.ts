import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WeatherApiService } from '../../../core/services/weather-api.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  constructor(private weatherApi: WeatherApiService) {}
  ngOnInit(): void {
    console.log('WeatherModule initialized');
    this.weatherApi.getCurrentWeather();
  }
}
