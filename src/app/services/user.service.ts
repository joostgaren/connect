import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Store } from '@ngrx/store';
import { SET_USER, State } from '../modules/authentication/state/reducers/auth-reducer';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor(private firebase: AngularFire, private store: Store<State>) {

    }

    load(): Promise<FirebaseAuthState> {
        return this.firebase.auth
            .first()
            .do((response:FirebaseAuthState) => this.store.dispatch({
                type: SET_USER,
                payload: response
            }))
            .toPromise();

    }

}