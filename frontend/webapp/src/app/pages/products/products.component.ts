import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  complete = true;

  imgDir = '../../assets/images/products/';
  route = '/products/';

  myProducts = [
    {title: '3D Globe', description: 'Experience the new way to view updated crurrency statistics via a 3D animated Globe', imgFileName: this.imgDir+'globe.PNG', link: this.route+'geoCurrencyGlobe'},
    {title: 'Twitter Pings', description: 'Take a look at where people aroud the world are talking about a currency', imgFileName: this.imgDir+'planetary.PNG', link: this.route+'geoCurrencyPings'},
    {title: 'Product Name 3', description: 'Description 3', imgFileName: this.imgDir+'globe.PNG', link: this.route+'geoCurrencyGlobe'},
    {title: 'Product Name 4', description: 'Description 4', imgFileName: this.imgDir+'globe.PNG', link: this.route+'geoCurrencyGlobe'},
    {title: 'Product Name 5', description: 'Description 5', imgFileName: this.imgDir+'globe.PNG', link: this.route+'geoCurrencyGlobe'},
    {title: 'Product Name 6', description: 'Description 6', imgFileName: this.imgDir+'globe.PNG', link: this.route+'geoCurrencyGlobe'}
  ]

  ngOnInit() {
  }

}
