import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartModule } from "./../chart/chart.module";




@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        ChartModule,
    ],
    exports: [
        HomeComponent,
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
 