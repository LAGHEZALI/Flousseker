import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "./material/material.module";
import { LoadingBarModule } from "./loading-bar/loading-bar.module";

import { LoadingBarComponent } from "../components/loading-bar/loading-bar.component";

import { HeaderMenuComponent } from "../components/header-menu/header-menu.component";
import { SideNavComponent } from "../components/side-nav/side-nav.component";
import { FooterComponent } from "../components/footer/footer.component";

import {EventHandlerService} from "../services/event-handler.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LoadingBarModule
  ],
  declarations: [
    LoadingBarComponent,
    HeaderMenuComponent,
    SideNavComponent,
    FooterComponent
  ],
  providers: [
    EventHandlerService
  ],
  exports: [
    MaterialModule,
    LoadingBarModule,
    LoadingBarComponent,
    HeaderMenuComponent,
    SideNavComponent,
    FooterComponent
  ],
})
export class SharedModule { }
