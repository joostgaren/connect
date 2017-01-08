import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        HomeModule,
        FlexLayoutModule,
        MaterialModule,
    ],
    exports: [
        LayoutComponent,
    ],
    declarations: [LayoutComponent]
})
export class LayoutModule { }
 