import { Component, OnInit, AfterViewInit } from '@angular/core';

import '../../../../assets/js/planetaryjs/run.js'

declare var planetaryObject: any;

@Component({
  selector: 'app-geo-currency-pings',
  templateUrl: './geo-currency-pings.component.html',
  styleUrls: ['./geo-currency-pings.component.scss']
})
export class GeoCurrencyPingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    planetaryObject.init();
  }

}
