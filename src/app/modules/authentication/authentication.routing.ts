import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'auth', component:AuthenticationComponent, data: { title: 'Login' },
    }
  ])],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
