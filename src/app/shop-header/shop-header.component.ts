
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Drink } from '../Drink.model';
import { DrinkService } from '../Drink.service';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['../shared/generics.css' ,'./shop-header.component.css']
})


export class ShopHeaderComponent implements OnInit {

  drinks: Drink[];


  constructor( private DrinkService: DrinkService, private router_btn: Router ) { }


  ngOnInit() { 
    this.drinks = this.DrinkService.getDrinks();
  }

  onLoadInfo(status, ndStatus) {
    this.router_btn.navigate(['shop/info']);

    this.DrinkService.status = status;
    this.DrinkService.ndStatus = ndStatus;

  } onLoadShop(status, ndStatus) {
    this.router_btn.navigate(['shop/cart']);

    this.DrinkService.status = status;
    this.DrinkService.ndStatus = ndStatus;
  }
}
