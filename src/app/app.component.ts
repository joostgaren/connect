import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BOOTSTRAP_REQUESTED, State } from './modules/authentication/state/reducers/auth-reducer';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app works!';

    isBootstrapFinished: Observable<boolean>;

  constructor(private store: Store<State>, private userService: UserService) {

    this.store.dispatch({ type: BOOTSTRAP_REQUESTED });

    this.isBootstrapFinished = this.store.select<State>('auth')
    .map(response => response.isBootstrapFinished);

  }

}