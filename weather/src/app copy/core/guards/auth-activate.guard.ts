import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanLoad,
  CanLoadFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let isLoggedIn = inject(AuthService).getLoginStatus();
  if (isLoggedIn) {
    return true;
  }
  return inject(Router).createUrlTree(['/home']);
};

export const authModuleActiveGuard: CanLoadFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  let isLoggedIn = inject(AuthService).getLoginStatus();
  if (isLoggedIn) {
    return true;
  }
  return inject(Router).createUrlTree(['/home']);
};
