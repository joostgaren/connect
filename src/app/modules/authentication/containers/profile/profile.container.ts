import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_REQUESTED, State } from './../../state/reducers/auth-reducer';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'profile-container',
  templateUrl: './profile.container.html',
  styleUrls: ['./profile.container.css']
})
export class ProfileContainer implements OnInit {

  private userName: Observable<String>;

  constructor(private store: Store<State>) {

    this.userName = this.store.select<State>('auth')
      .filter(response => response.user !== null)
      .map(response => response.user.auth.email);

  }

  ngOnInit() {

  }

  doLogout(event) {
    this.store.dispatch({ type: LOGOUT_REQUESTED });
  }

}
