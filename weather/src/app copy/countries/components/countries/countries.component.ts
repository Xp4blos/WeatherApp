import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from '../../../core/services/countries.service';
export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [lang: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  cca3: string;
  region: string;
  subregion?: string;
  capital?: string[];
  population: number;
  area: number;
  languages?: { [key: string]: string };
  currencies?: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  flag: string;
  flags: { png: string; svg: string };
  coatOfArms?: { png?: string; svg?: string };
  maps: { googleMaps: string; openStreetMaps: string };
  timezones: string[];
  continents: string[];
}
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private countriesService: CountriesService
  ) {}

  countries!: Array<
    Pick<Country, 'name' | 'population'> & { isOver10m: boolean }
  >;
  currency: string = 'euro';
  errorMessage: string = '';
  ngOnInit(): void {
    this.countriesService.currency$.subscribe((currency) => {
      this.getCountriesWithCurrency(currency).subscribe({
        next: (countries) => {
          this.errorMessage = '';
          this.countries = countries;
          this.currency = currency;
        },
        error: (error) => {
          this.errorMessage = 'Error fetching countries: ' + error.message;
          console.error(this.errorMessage);
          this.countries = [];
        },
      });
    });
  }

  getCountriesWithCurrency(
    currency: string
  ): Observable<
    Array<Pick<Country, 'name' | 'population'> & { isOver10m: boolean }>
  > {
    return this.http
      .get<Country[]>('https://restcountries.com/v3.1/currency/' + currency, {})
      .pipe(
        map((countries) =>
          countries.map((country) => ({
            name: country.name,
            population: country.population,
            isOver10m: country.population > 10000000,
          }))
        )
      );
  }
}
