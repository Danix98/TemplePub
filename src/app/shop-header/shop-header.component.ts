import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.css']
})
export class ShopHeaderComponent {

  constructor(private router_btn: Router) {  }

  onLoadInfo() {
    this.router_btn.navigate(['shop/info']);
  }

  onLoadShop() {
    this.router_btn.navigate(['shop/cart']);
  }
}
