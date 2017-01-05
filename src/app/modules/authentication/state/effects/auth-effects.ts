import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';


@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private firebase: AngularFire,
        private router: Router,
    ) { }

    @Effect() startup$ = this.actions$
        .ofType('BOOTSTRAP_REQUESTED')
        .switchMap(() => this.firebase.auth.first()
            .map(resp => ({ type: 'BOOTSTRAP_FINISHED', payload: resp }))
            .catch(() => Observable.of({ type: 'STARTUP_FAILED' }))
        );

    @Effect() logout$ = this.actions$
        .ofType('LOGOUT_REQUESTED')
        .map(() => this.firebase.auth.logout())
        .map(resp => ({ type: 'LOGOUT_FINISHED', payload: resp }))
        .catch(() => Observable.of({ type: 'LOGIN_FAILED' }));


    @Effect() logoutFinished$ = this.actions$
        .ofType('LOGOUT_FINISHED')
        .map(() => this.router.navigateByUrl("auth"));

    @Effect() login$ = this.actions$
        .ofType('LOGIN_REQUESTED')
        .switchMap(
        action => this.firebase.auth.login(action.payload)
            .then(resp => ({ type: 'LOGIN_FINISHED', payload: resp }))
            .catch(resp => ({ type: 'LOGIN_FAILED', payload: resp }))
        );        

    @Effect({ dispatch: false }) loginSuccess$ = this.actions$
        .ofType('LOGIN_FINISHED')
        .map(() => this.router.navigateByUrl('home'));

}