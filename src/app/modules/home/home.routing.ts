import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth.guard';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'home', component:HomeComponent, data: { title: 'Home' }, canActivate: [AuthGuard],
    }
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
