import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import { EventHandlerService } from "../../services/event-handler.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private click: EventHandlerService) {}

  ngOnInit() {
    this.click.menuClickEvent.subscribe(()=>{
      this.onToggle();
    })
  }

  onToggle() {
    console.log("3")
    this.sidenav.toggle()
  }
}
