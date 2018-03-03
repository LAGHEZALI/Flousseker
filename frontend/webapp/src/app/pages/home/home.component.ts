import { Component, OnInit, AfterViewInit } from '@angular/core';

import "../../../assets/js/home/video-bg.js";

declare var videoObject: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    videoObject.init();
  }
}
