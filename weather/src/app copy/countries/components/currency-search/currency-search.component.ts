import { Component, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { CountriesService } from '../../../core/services/countries.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-surrency-search',
  templateUrl: './currency-search.component.html',
  styleUrls: ['./currency-search.component.scss'],
})
export class CurrencySearchComponent {
  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}
  searchTerm!: string;

  submit() {
    this.countriesService.setCurrency(this.searchTerm);
    console.log('Currency set to: ', this.searchTerm);
    this.router.navigate(['/countries']);
  }
}
