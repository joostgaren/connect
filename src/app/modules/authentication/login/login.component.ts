import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //  @Input() authenticationRunning: boolean;

  private authRunning;
  private authFailed;

  @Input() set authenticationRunning(running: boolean) {
    this.authRunning = running;
  }

  @Input() set authenticationFailed(failed: boolean) {
    this.authFailed = failed;
    this.authFailed && this.showErrorMessage("Authentication Failed!", true);
  }

  @Output() onLoginRequested = new EventEmitter();

  snackBarConfig: MdSnackBarConfig;

  public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
    rememberMe: [""]
  });

  constructor(private fb: FormBuilder, private snackBar: MdSnackBar, public viewContainerRef: ViewContainerRef) {
    this.snackBarConfig = new MdSnackBarConfig();
    this.snackBarConfig.viewContainerRef = this.viewContainerRef;
    this.snackBarConfig.duration = 1000;
  }

  ngOnInit() {

  }

  showErrorMessage(errorText: string, resetForm: boolean) {
    this.snackBar.open(errorText, '', this.snackBarConfig);
    resetForm && this.loginForm.reset();
  }

  doLogin(event) {
    console.log("Email valid: " + this.loginForm.controls['email'].valid);
    this.loginForm.valid ? this.onLoginRequested.next(this.loginForm.value) : this.showErrorMessage("Please fill all mandatory fields!", false);;
  }

}
