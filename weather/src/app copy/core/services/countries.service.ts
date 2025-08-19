import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { WeatherResponse } from '../models/weather.model';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor() {}
  currency$ = new BehaviorSubject<string>('euro');

  setCurrency(currency: string): void {
    this.currency$.next(currency);
  }
}
