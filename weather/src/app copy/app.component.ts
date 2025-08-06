import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  date: Date = new Date();
  displayDate: string = this.date.toLocaleDateString();
  hours: string = this.date.getHours().toString();
  minutes: string = '';
  timer: any;
  ngOnInit(): void {
    this.updateTime();
    console.log(this.date.getHours());
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
