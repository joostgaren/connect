import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LOGOUT_REQUESTED, State } from '../authentication/state/reducers/auth-reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

title: 'test';

  state: Observable<State>;

  constructor(private store: Store<State>) {

    this.state = this.store.select<State>('auth');

   }

  ngOnInit() {
    console.log("Init Home");
  }

  logout() {
    console.log("Logout");
    this.store.dispatch({ type: LOGOUT_REQUESTED });
  }

}
