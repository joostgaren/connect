import { HomeModule } from './../home/home.module';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth.guard';

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'layout', component: LayoutComponent, data: { title: 'Layout' }, canActivate: [AuthGuard],
      children: [
        {
          path: 'home',
          component: HomeComponent,
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
