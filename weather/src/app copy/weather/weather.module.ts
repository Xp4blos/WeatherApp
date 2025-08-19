import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { ApiTestComponent } from './components/api-test/api-test.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { WeatherHomeComponent } from './components/weather-home/weather-home.component';
@NgModule({
  declarations: [
    WeatherComponent,
    ApiTestComponent,
    WeatherHomeComponent,
    SearchBarComponent,
  ],

  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [
    WeatherComponent,
    ApiTestComponent,
    WeatherHomeComponent,
    SearchBarComponent,
  ],
})
export class WeatherModule {}
