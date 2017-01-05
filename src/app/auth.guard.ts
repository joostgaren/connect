import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from './modules/authentication/state/reducers/auth-reducer';
import { Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<any>, private router: Router) {
    }

    canActivate() {
        console.log("canActivate");
        return this.store.select<State>('auth')
            .first(response => response.isBootstrapFinished)
            .map(response => response.isUserLoggedIn)
            .do(isUserLoggedIn => !isUserLoggedIn && this.router.navigateByUrl('/auth'));
    }
}

