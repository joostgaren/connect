import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";




@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    exports: [
        HomeComponent,
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
 