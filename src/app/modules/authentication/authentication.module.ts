import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    LoginModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [AuthenticationComponent]
})
export class AuthenticationModule { }
  