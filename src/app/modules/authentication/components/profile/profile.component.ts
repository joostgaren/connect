import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'authentication-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private _userName;

  @Input() set userName(userName: String) {
    this._userName = userName;
  }

  @Output() onLogoutRequested = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  doLogout(event) {
    this.onLogoutRequested.next();
  }

}
