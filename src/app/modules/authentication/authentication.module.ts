import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainer } from './containers/login/login.container';
import { LoginComponent } from './components/login/login.component';
import { ProfileContainer } from './containers/profile/profile.container';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthenticationRoutingModule } from './authentication.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [
    LoginContainer,
    LoginComponent,
    ProfileContainer,
    ProfileComponent
  ],
  exports: [
    ProfileContainer,
  ]
})
export class AuthenticationModule { }
