import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './weather/components/weather-home/weather-home.component';
import { NgModule } from '@angular/core';
import { CountriesComponent } from './countries/components/countries/countries.component';
import { authActivateGuard } from './core/guards/auth-activate.guard';
import { CurrencySearchComponent } from './countries/components/currency-search/currency-search.component';
import { searchFormGuard } from './core/guards/search-form.guard';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WeatherHomeComponent },
  {
    path: 'countries',
    component: CountriesComponent,
    canActivate: [authActivateGuard],
    children: [
      {
        path: 'currencySearch',
        component: CurrencySearchComponent,
        canDeactivate: [searchFormGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
