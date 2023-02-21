
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  animate,
  state,
  style,
  transition,
  trigger } from '@angular/animations';

import { Drink } from '../../Drink.model';
import { DrinkService } from '../../Drink.service';



@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['../../shared/generics.css', './shop-cart.component.css'],

  animations: [
    trigger('inputState', [

      state('none', style({
        'box-shadow': 'inset 0px 0px 40px 40px rgb(255, 225, 0, 0.0)'
      })),
      state('active', style({
        'box-shadow': 'inset 0px 0px 40px 40px rgb(255, 225, 0, 0.3)'
      })),

      transition('none <=> active', animate(200)),

    ])
  ]
})

export class ShopCartComponent implements OnInit {

  constructor(
    private DrinkService: DrinkService,
    private router_btn: Router,
    private element: BrowserAnimationsModule) { }
    
  drinks: Drink[];

  section: boolean = true;
  sectionString: string;

  limitQnt = 50;

  lPrice: number;
  nPrice: number;

  effect = 'none';

  nameStatus = this.DrinkService.stStatus;
  priceStatus = this.DrinkService.ndStatus;



  ngOnInit() {  }
 
  onCheckQnt(event: Event) {

    this.lPrice = +(<HTMLInputElement>event.target).value;
    this.nPrice = this.lPrice * +this.priceStatus;

    if(this.lPrice > this.limitQnt || this.lPrice <1) {
      return (this.nPrice = undefined)
    }
  }

  onBuy() {
    this.section = false;

    if(this.lPrice === undefined) {
      this.sectionString = "Impossibile effettuare l'acquisto";
    }

    else {
      this.sectionString = "Pagamento effettuato: € " + this.nPrice;
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

  onExit() {
    this.router_btn.navigate(['shop']);
  }

  onEffect() {
    this.effect == 'none' ? this.effect = 'active' : this.effect = 'none';
  } 
}
