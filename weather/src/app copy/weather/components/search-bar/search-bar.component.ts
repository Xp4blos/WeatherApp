import { Component } from '@angular/core';
import { WeatherService } from '../../../core/services/weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(private weather: WeatherService) {}
  searchbar!: string;
  searchSubmit(): void {
    this.weather.setCurrentSearchSubject(this.searchbar);
  }
}
