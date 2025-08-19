import { Component } from '@angular/core';
import { WeatherService } from '../../../core/services/weather.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnInit {
  constructor(private weather: WeatherService) {}
  date: Date = new Date();
  displayDate: string = this.date.toLocaleDateString();
  hours: string = this.date.getHours().toString();
  minutes: string = '';
  location: string = 'Unknown Location';
  timer: any;
  ngOnInit(): void {
    this.weather.location$.subscribe({
      next: (location) => {
        this.location = location;
        console.log('Weather Location Subject: ', this.location);
      },
    });

    this.updateTime();
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  private updateTime(): void {
    this.date = new Date();
    this.hours = this.date.getHours().toString();
    this.minutes =
      this.date.getMinutes() < 10
        ? '0' + this.date.getMinutes().toString()
        : this.date.getMinutes().toString();
  }
}
