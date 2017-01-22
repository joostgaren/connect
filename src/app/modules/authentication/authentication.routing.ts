import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginContainer } from './containers/login/login.container';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'login', component:LoginContainer, data: { title: 'Login' },
    }
  ])],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
