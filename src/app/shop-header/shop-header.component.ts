
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
  button = document.getElementById('btn');

  name? : any; //wishlist
  
  constructor( private DrinkService: DrinkService, private router_btn: Router ) { }

  ngOnInit() {
    this.drinks = this.DrinkService.getDrinks().slice();
  }

  onLoadInfo<T>(name: string, stStatus: T, ndStatus: T) {

    this.name = name; //wishlist

    this.DrinkService.stStatus = stStatus;
    this.DrinkService.ndStatus = ndStatus;

    this.router_btn.navigate(['shop']);

    setTimeout(() => {
    this.router_btn.navigate(['shop/info', name],
      { queryParams: {vedi: true} });
    }, 50)
    
  } onLoadShop<T>(stStatus: T, ndStatus: T) {
    
    this.DrinkService.stStatus = stStatus;
    this.DrinkService.ndStatus = ndStatus;

    this.router_btn.navigate(['shop']);

    setTimeout(() => {
    this.router_btn.navigate(['shop/cart', stStatus],
      { queryParams: {vedi: true} });
    }, 50)
  }
  
}
