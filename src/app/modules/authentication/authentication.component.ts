import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGIN_REQUESTED, State } from './state/reducers/auth-reducer';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-auth',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  authenticationFailed: Observable<boolean>;

  constructor(private store: Store<State>) { 

    this.authenticationFailed = this.store.select<State>('auth')
      .map(response => response.isAuthenticationFailed);

  }

  ngOnInit() {

  }

   doLogin(event) {
     console.log(event);
     this.store.dispatch({ type: LOGIN_REQUESTED, payload: event });
  }

}
 