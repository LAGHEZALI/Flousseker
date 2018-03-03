//  Imported Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ProductsModule } from "./pages/products/products.module";

import { AppRoutingModule } from "./app-routing.module";

import { SharedModule } from "./shared/modules/shared.module";


//  Imported Components

import { AppComponent } from './app.component';

import { HomeComponent } from "./pages/home/home.component";
import { Error404Component } from './pages/error404/error404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    ContactComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ProductsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
