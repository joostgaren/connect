import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BOOTSTRAP_REQUESTED, State } from './modules/authentication/state/reducers/auth-reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  constructor(private store: Store<State>) {
    this.store.dispatch({ type: BOOTSTRAP_REQUESTED });
  }

}
