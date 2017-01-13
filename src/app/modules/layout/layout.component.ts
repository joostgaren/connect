import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LOGOUT_REQUESTED, State } from '../authentication/state/reducers/auth-reducer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  // logout user if rememberMe is not set and browser is closed
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.onCloseBrowser();
  }


  title: 'test';

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }

  onCloseBrowser() {
    let state: State;

    this.store.select<State>('auth')
      .first()
      .subscribe(s => state = s);

    state.isRememberMeSet ? null : this.logout();
  }

  logout() {
    this.store.dispatch({ type: LOGOUT_REQUESTED });
  }

}
