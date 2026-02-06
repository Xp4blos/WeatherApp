import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WeatherService } from './core/services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WeatherApp';
}
