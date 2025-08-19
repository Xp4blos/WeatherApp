import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { SharedModule } from './shared/shared.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterModule } from '@angular/router';
import { CountriesModule } from './countries/countries.module';
import { testInterceptorInterceptor } from './core/interceptors/test-interceptor.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RouterModule,
    CountriesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
