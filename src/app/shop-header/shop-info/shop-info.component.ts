
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Drink } from '../../Drink.model';
import { DrinkService } from '../../Drink.service';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.css']
})

export class ShopInfoComponent implements OnInit {

  drinks: Drink[];

  constructor(private DrinkService: DrinkService, private router_btn: Router) { 
    this.DrinkService.drinkStatus.subscribe( (objStatus: any) => { return objStatus } );
   }

  ngOnInit() { }


  onCancel() {
    this.router_btn.navigate(['shop']);
  }
}
