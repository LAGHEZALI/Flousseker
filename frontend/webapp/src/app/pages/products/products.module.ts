import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from "../../shared/modules/shared.module";

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from "./products.component";
import { GeoCurrencyStatisticsComponent } from "./geo-currency-statistics/geo-currency-statistics.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    GeoCurrencyStatisticsComponent
  ]
})
export class ProductsModule { }
