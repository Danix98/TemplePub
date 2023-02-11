
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Drink } from '../../Drink.model';
import { DrinkService } from '../../Drink.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['../../shared/generics.css', './shop-cart.component.css']
})

export class ShopCartComponent implements OnInit {

  drinks: Drink[];

  limitQnt = 50;

  qntFound: boolean = false;
  lPrice: number;
  nPrice: number;

  nameStatus = this.DrinkService.stStatus;
  priceStatus = this.DrinkService.ndStatus;

  constructor(private DrinkService: DrinkService, private router_btn: Router) { }


  ngOnInit() {  }
 
  onCheckQnt(event: Event) {

    this.lPrice = +(<HTMLInputElement>event.target).value;
    this.nPrice = this.lPrice * +this.priceStatus;

    if(this.lPrice > this.limitQnt || this.lPrice <1) {
      return (this.nPrice = undefined)
    }
  }

  onBuy() {
    if(this.lPrice === undefined)
      alert("Impossibile effettuare l'acquisto");

    else {
      alert("Pagamento effettuato: € " + this.nPrice);
      this.router_btn.navigate(['shop']);
    }
  }

  onCancel() {
    let ngRemove: boolean;


    if(this.lPrice === undefined)
      this.router_btn.navigate(['shop']);

    else {
      ngRemove = confirm('Sei sicuro di rimuovere il carrello? I dati andranno persi.')
      if(ngRemove)
        this.router_btn.navigate(['shop']);
    }
  }
}
