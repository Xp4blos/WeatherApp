import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeatherResponse } from '../../../core/models/weather.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss'],
})
export class ApiTestComponent implements OnInit {
  constructor(private http: HttpClient) {}

  apiKey: string = environment.apiKey;

  ngOnInit(): void {
    console.log(
      '%c ApiTestComponent initialized',
      'background: #222; color: #bada55'
    );
  }
  getCurrentWeather(
    location: string
  ): Observable<Omit<WeatherResponse, 'main'>> {
    let params = new HttpParams()
      .set('q', location)
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http
      .get<WeatherResponse>('https://api.openweathermap.org/data/2.5/weather', {
        params: params,
      })
      .pipe(map(({ main, ...response }) => response));
  }
}
