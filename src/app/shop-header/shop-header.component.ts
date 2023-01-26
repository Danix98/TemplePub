
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Drink } from './Drink.model';
import { DrinkService } from './Drink.service';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.css'],
  providers: [DrinkService]
})


export class ShopHeaderComponent implements OnInit {

  drinks: Drink[];
  id: number;

  constructor( private DrinkService: DrinkService, private router_btn: Router,
    private route: ActivatedRoute ) { }



  ngOnInit() {

          
          this.drinks = this.DrinkService.getDrinks();
  }


  onLoadInfo() {
    this.router_btn.navigate(['shop/info']);
  } onLoadShop() {
    this.router_btn.navigate(['shop/cart']);
  }
}
