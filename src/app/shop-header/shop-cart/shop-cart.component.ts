
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Drink } from '../../Drink.model';
import { DrinkService } from '../../Drink.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
  providers: [DrinkService]
})

export class ShopCartComponent implements OnInit {

  drinks: Drink[];
  limitQnt = 50;
  lPrice: number;
  nPrice: number;
  ngRemove: boolean;

  constructor(private DrinkService: DrinkService, private router_btn: Router) { }


  ngOnInit() {
    this.drinks = this.DrinkService.getDrinks();
  }
 
  onCheckQnt(event: Event) {
    this.lPrice = +(<HTMLInputElement>event.target).value
    this. nPrice = this.lPrice * +`${ this.drinks[0].price }`

    if(this.lPrice > this.limitQnt || this.lPrice <1) {
      return (this.nPrice = undefined)
    }
  } 

  onBuy() {
    if(this.lPrice === undefined)
      alert("Impossibile effettuare l'acquisto");
    else {
      alert("Hai acquistato: Dettagli");
      this.router_btn.navigate(['shop']);
    }
  }

  onCancel() {
    this.ngRemove = confirm('Sei sicuro di rimuovere il carrello? I dati andranno persi.')

    if(this.ngRemove)
      this.router_btn.navigate(['shop']);
  }
}
