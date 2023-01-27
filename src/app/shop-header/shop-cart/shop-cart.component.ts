
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Drink } from '../Drink.model';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})

export class ShopCartComponent implements OnInit {

  drink: Drink;
  id: number;
  lPrice: number;
  nPrice: number;
  limitQnt = 50;
  ngRemove: boolean;

  constructor(private router_btn: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe (
      (params: Params) => {
        this.id = +params['id'];

        // this.drink = this.shs.getDrinks(this.name, this.price);
        // this.shs.getDrinks();
      }
    )  
  }

  onCheckQnt(event: Event) {
    this.lPrice = +(<HTMLInputElement>event.target).value
    this. nPrice = this.lPrice * +`${ this.drink.price }`

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

    if(this.ngRemove === true)
      this.router_btn.navigate(['shop']);
  }
}
