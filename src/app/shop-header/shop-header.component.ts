
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Drink } from './shop-header.model';
import { ShopHeaderService } from './shop-header.service';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.css'],
  providers: [ShopHeaderService]
})

export class ShopHeaderComponent implements OnInit {

  drinks: Drink[];

  constructor( private ShopHeaderService: ShopHeaderService, private router_btn: Router ) {
  }



  ngOnInit() {
    this.drinks = this.ShopHeaderService.getDrinks();
  }

  onLoadInfo() {
    this.router_btn.navigate(['shop/info']);
  } onLoadShop() {
    this.router_btn.navigate(['shop/cart']);
  }
}
