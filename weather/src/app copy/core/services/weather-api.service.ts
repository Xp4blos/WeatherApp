import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather.model';
@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}
  apiKey: string = environment.apiKey;

  getCurrentWeather(location: string): Observable<WeatherResponse> {
    let params = new HttpParams()
      .set('q', location)
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http.get<WeatherResponse>(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: params,
      }
    );
  }
}
