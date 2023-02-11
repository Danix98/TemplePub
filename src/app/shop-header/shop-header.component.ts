
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Drink } from '../Drink.model';
import { DrinkService } from '../Drink.service';
import { DrinkDescService } from '../Drink-desc.service';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['../shared/generics.css' ,'./shop-header.component.css'],
  providers: [DrinkService, DrinkDescService]
})


export class ShopHeaderComponent implements OnInit {

  drinks: Drink[];


  constructor( private DrinkService: DrinkService, private router_btn: Router ) { }


  ngOnInit() { 
    this.drinks = this.DrinkService.getDrinks().slice();
  }

  onLoadInfo<T>(stStatus: T, ndStatus: T) {
    this.router_btn.navigate(['shop/info']);

    this.DrinkService.stStatus = stStatus;
    this.DrinkService.ndStatus = ndStatus;
    
  } onLoadShop<T>(stStatus: T, ndStatus: T) {
    this.router_btn.navigate(['shop/cart']);

    this.DrinkService.stStatus = stStatus;
    this.DrinkService.ndStatus = ndStatus;
  }
}
