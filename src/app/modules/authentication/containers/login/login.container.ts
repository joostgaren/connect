import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGIN_REQUESTED, State } from './../../state/reducers/auth-reducer';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'login-container',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.css']
})
export class LoginContainer implements OnInit {

  private authenticationFailed: Observable<boolean>;
  private authenticationRunning: Observable<boolean>;

  constructor(private store: Store<State>) {

    this.authenticationFailed = this.store.select<State>('auth')
      .map(response => response.isAuthenticationFailed);

    this.authenticationRunning = this.store.select<State>('auth')
      .map(response => response.isAuthenticationRunning);

  } 

  ngOnInit() {

  }

  doLogin(event) {
    console.log(event);
    this.store.dispatch({ type: LOGIN_REQUESTED, payload: event });
  }

}
