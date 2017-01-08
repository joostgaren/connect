import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '@angular/material';



@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        HomeComponent,
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
 