
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './shared/app-routing.module';
import { DrinkDescService } from './Drink-desc.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopInfoComponent } from './shop-header/shop-info/shop-info.component';
import { ShopCartComponent } from './shop-header/shop-cart/shop-cart.component';
import { InfoComponent } from './info/info.component';
import { TableComponent } from './material/table/table.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { failForm } from './info/fail-form';

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
    InfoComponent,
    TableComponent,
    ShortenPipe,
    failForm
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [DrinkDescService],
  bootstrap: [AppComponent]
})

export class AppModule { }
