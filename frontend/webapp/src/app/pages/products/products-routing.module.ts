import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from "./products.component";
import { GeoCurrencyStatisticsComponent } from "./geo-currency-statistics/geo-currency-statistics.component";
import { GeoCurrencyPingsComponent } from "./geo-currency-pings/geo-currency-pings.component";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/geoCurrencyGlobe', component: GeoCurrencyStatisticsComponent },
  { path: 'products/geoCurrencyPings', component: GeoCurrencyPingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
