import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LOGOUT_REQUESTED, State } from '../authentication/state/reducers/auth-reducer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

title: 'test';

  isBootstrapFinished: Observable<boolean>;

  constructor(private store: Store<State>) {

    this.isBootstrapFinished = this.store.select<State>('auth')
    .map(response => response.isBootstrapFinished);

   }

  ngOnInit() {
  }

  logout() { 
    this.store.dispatch({ type: LOGOUT_REQUESTED });
  }

}
