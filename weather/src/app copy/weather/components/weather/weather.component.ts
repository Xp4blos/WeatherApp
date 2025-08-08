import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WeatherApiService } from '../../../core/services/weather-api.service';
import { WeatherService } from '../../../core/services/weather.service';
import { WeatherResponse } from '../../../core/models/weather.model';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  constructor(
    private weatherApi: WeatherApiService,
    private weather: WeatherService
  ) {}
  currentWeather!: WeatherResponse;
  sun: { sunrise: Date; sunset: Date } = {
    sunrise: new Date(),
    sunset: new Date(),
  };
  ngOnInit(): void {
    this.weather.setCurrentSearchSubject('London'); // Default search term
    console.log('WeatherModule Component initialized');
    this.weather.currentSearch$.subscribe({
      next: (search) => {
        this.weatherApi.getCurrentWeather(search).subscribe({
          next: (data) => {
            console.log('Current Weather Data:', data);
            this.weather.setCurrentWeatherAndLocationSubject(data);
            this.currentWeather = data;
            this.sun.sunrise = new Date(data.sys.sunrise * 1000);
            this.sun.sunset = new Date(data.sys.sunset * 1000);
            console.log('Sunrise:', this.sun.sunrise);
            console.log('Sunset:', this.sun.sunset);
          },
          error: (error) => {
            console.error('Error fetching weather data:', error);
          },
          complete: () => {
            console.log('Weather data fetch complete');
            console.log('Current Icon: ', this.currentWeather.weather[0].icon);
          },
        });
      },
    });
  }
}
