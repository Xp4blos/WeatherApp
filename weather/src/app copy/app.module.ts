import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { SharedModule } from './shared/shared.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterModule } from '@angular/router';
import { CountriesModule } from './countries/countries.module';
import { testInterceptorInterceptor } from './core/interceptors/test-interceptor.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RouterModule,
    CountriesModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
