import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_REQUESTED, State } from '../authentication/state/reducers/auth-reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

title: 'test';

  constructor() {
   }

  ngOnInit() {
    console.log("Init Home");
  }


}
