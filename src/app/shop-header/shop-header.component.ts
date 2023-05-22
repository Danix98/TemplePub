
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Drink } from '../Drink.model';
import { DrinkService } from '../Drink.service';
import { DrinkDescService } from '../Drink-desc.service';
import { RequestWService } from '../material/nav/wishlist/wishlist_ref/requestW.service';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['../shared/generics.css' ,'./shop-header.component.css'],
  providers: [DrinkService, DrinkDescService]
})



export class ShopHeaderComponent implements OnInit {

  drinks: Drink[];
  button = document.getElementById('btn');
  
  constructor(
    private DrinkService: DrinkService,
    private RequestWService: RequestWService,
    private router_btn: Router ) { }

  ngOnInit() {
    this.drinks = this.DrinkService.getDrinks().slice();
  }

  onLoadInfo<T extends string>(name: T, stStatus: T, ndStatus: T) {

    this.DrinkService.stStatus = stStatus;
    this.DrinkService.ndStatus = ndStatus;

    this.router_btn.navigate(['shop']);

    setTimeout(() => {
    this.router_btn.navigate(['shop/info', name],
      { queryParams: {vedi: true} });
    }, 50)

  //wishlist
    //elemento differente
    if(this.RequestWService.list_data.indexOf(name) === -1)
      this.RequestWService.list_data.unshift(name)
    //elemento già selezionato
    else {
      const update = this.RequestWService.list_data.indexOf(name)
      if(update > -1) {
        this.RequestWService.list_data.splice(update, 1);
        this.RequestWService.list_data.unshift(name)
      }
    }
    
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
