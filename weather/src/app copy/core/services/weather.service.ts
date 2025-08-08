import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { WeatherResponse } from '../models/weather.model';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}

  currentWeather$ = new Subject<WeatherResponse>();
  location$ = new BehaviorSubject<string>('Unknown Location');
  currentSearch$ = new BehaviorSubject<string>('');
  setCurrentWeatherAndLocationSubject(weather: WeatherResponse): void {
    this.currentWeather$.next(weather);
    this.location$.next(weather.name);
  }
  setCurrentSearchSubject(search: string): void {
    this.currentSearch$.next(search);
  }
}
