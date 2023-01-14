
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DrinkService } from '../Drink.service';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.css']
})

export class ShopInfoComponent implements OnInit {

  id: number;
  service: DrinkService;
  buyMode = false;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe (
      (params: Params) => {
        this.buyMode = params['id'] != null; //NON in acquisto-mode
        this.id = +params['id'];

        // this.drink = this.shs.getDrinks(this.description, this.imgpath);
        // this.shs.getDrinks();
      }
    )
    // console.log(this.buyMode)
  }
}
