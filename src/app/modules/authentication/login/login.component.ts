import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

@Input() authenticationFailed: boolean;
@Output() onLoginRequested = new EventEmitter();

public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(private fb: FormBuilder) {
      
   }

  ngOnInit() {
  }

 doLogin(event) {
    this.onLoginRequested.next(this.loginForm.value);
  }

}
