import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}
  apiKey: string = environment.apiKey;

  getCurrentWeather() {
    this.http
      .get(
        'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=' +
          this.apiKey
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error('Error fetching weather data:', error);
        }
      );
  }
}
