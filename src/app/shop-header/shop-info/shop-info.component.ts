
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Drink } from '../../Drink.model';
import { DrinkService } from '../../Drink.service';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['../../shared/generics.css', './shop-info.component.css']
})

export class ShopInfoComponent {

  constructor(
    private DrinkService: DrinkService,
    private router_btn: Router) { }

  drinks: Drink[];

  imgStatus = this.DrinkService.stStatus;
  descStatus = this.DrinkService.ndStatus;

  

  onCancel() {
    this.router_btn.navigate(['shop']);
  }
}
