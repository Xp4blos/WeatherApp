import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './components/countries/countries.component';
import { CurrencySearchComponent } from './components/currency-search/currency-search.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { testInterceptorInterceptor } from '../core/interceptors/test-interceptor.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [CountriesComponent, CurrencySearchComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: testInterceptorInterceptor,
      multi: true,
    },
  ],

  exports: [CountriesComponent, CurrencySearchComponent],
})
export class CountriesModule {}
