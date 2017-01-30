import { Component, OnInit, HostListener, Inject, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LOGOUT_REQUESTED, State } from '../authentication/state/reducers/auth-reducer';
import { MediaChange, BreakPointRegistry, MatchMedia } from "@angular/flex-layout";
import { ObservableMediaService } from "@angular/flex-layout/media-query/observable-media-service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  // logout user if rememberMe is not set and browser is closed
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.onCloseBrowser();
  }


  title: 'test';
  private _subscription;
  public isOpen = true;
  public mediaChange;

  //  constructor(private store: Store<State>) {
  //  }

  constructor(private store: Store<State>, @Inject(ObservableMediaService) media) {
    this._subscription = media.subscribe((change: MediaChange) => {
      this.isOpen = (change.mqAlias !== 'xs');
      this.mediaChange = change;
    });
  }

  ngOnInit() {
  }

  onCloseBrowser() {
    let state: State;

    this.store.select<State>('auth')
      .first()
      .subscribe(s => state = s);

//    state.isRememberMeSet ? null : this.logout();
  }

  logout() {
    this.store.dispatch({ type: LOGOUT_REQUESTED });
  }

  ngOnDestroy() { this._subscription.unsubscribe(); }

}
