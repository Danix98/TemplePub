import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopInfoComponent } from './shop-header/shop-info/shop-info.component';
import { ShopCartComponent } from './shop-header/shop-cart/shop-cart.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    ShopHeaderComponent,
    ShopInfoComponent,
    ShopCartComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
