
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Drink } from '../shared/Drink.model';
import { DrinkService } from '../shared/Drink.service';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.css'],
  providers: [DrinkService]
})


export class ShopHeaderComponent implements OnInit {

  drinks: Drink[];
  id: number;

  constructor( private DrinkService: DrinkService, private router_btn: Router ) { }


  ngOnInit() { 
    this.drinks = this.DrinkService.getDrinks();
  }


  onLoadInfo(i: number) {
    this.router_btn.navigate(['shop/info']);

    this.id = i;
    // console.log(this.id)
    return this.id

  } onLoadShop(i: number) {
    this.router_btn.navigate(['shop/cart']);

    this.id = i;
    // console.log(this.id)
    return this.id
  }
}
