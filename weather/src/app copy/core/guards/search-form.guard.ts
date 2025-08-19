import { CanDeactivateFn } from '@angular/router';
import { CurrencySearchComponent } from '../../countries/components/currency-search/currency-search.component';
export const searchFormGuard: CanDeactivateFn<CurrencySearchComponent> = (
  component: CurrencySearchComponent,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.searchTerm)
    return window.confirm(
      'Deactifator Test. Input.length > 0; Input.value = " ' +
        component.searchTerm +
        ' " Do you really want to leave?'
    );
  return true;
};
