import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from "./products.component";
import { GeoCurrencyStatisticsComponent } from "./geo-currency-statistics/geo-currency-statistics.component";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/geoCurrencyGlobe', component: GeoCurrencyStatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
