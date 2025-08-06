import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherModule } from '../weather/weather.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, WeatherModule, CoreModule],
  exports: [WeatherModule],
})
export class SharedModule {}
