
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

    // this.DrinkService.drinkStatus.subscribe( (objStatus: any) => {console.log(objStatus) } );
  }

  onLoadInfo(status: string|number, ndStatus: string|number) {
    this.router_btn.navigate(['shop/info']);

    this.DrinkService.drinkStatus.emit({imgStatus: status, descStatus: ndStatus})

  } onLoadShop(status: string|number, ndStatus: string|number) {
    this.router_btn.navigate(['shop/cart']);

    this.DrinkService.drinkStatus.emit({nameStatus: status, priceStatus: ndStatus})
  }
}
