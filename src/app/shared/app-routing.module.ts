
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "../main/main.component";
import { ShopCartComponent } from "../shop-header/shop-cart/shop-cart.component";
import { ShopHeaderComponent } from "../shop-header/shop-header.component";
import { ShopInfoComponent } from "../shop-header/shop-info/shop-info.component";
import { InfoComponent } from "../info/info.component";

const appRoutes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MainComponent },
    { path: 'shop', component: ShopHeaderComponent ,
      children: [  { path: 'info/:name', component: ShopInfoComponent },
                  { path: 'cart/:name', component: ShopCartComponent }
                ] },
    { path: 'info', component: InfoComponent },
    { path: '**', redirectTo: 'home' }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }