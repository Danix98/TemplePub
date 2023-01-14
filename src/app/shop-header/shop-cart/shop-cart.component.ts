
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DrinkService } from '../Drink.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})

export class ShopCartComponent implements OnInit {

  id: number;
  drink: DrinkService;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe (
      (params: Params) => {
        this.id = +params['id'];

        // this.drink = this.shs.getDrinks(this.name, this.price);
        // this.shs.getDrinks();
      }
    )  
  }
}
