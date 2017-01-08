import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';


@Injectable()
export class LayoutEffects {
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
        .catch(() => Observable.of({ type: 'LOGOUT_FAILED' }));


    @Effect() logoutFinished$ = this.actions$
        .ofType('LOGOUT_FINISHED')
        .map(() => this.router.navigateByUrl("auth"));


}