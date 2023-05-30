
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from './material/material.module';
import { TableComponent } from './material/info/table/table.component';
import { WishlistComponent } from './material/nav/wishlist/wishlist.component';

import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopInfoComponent } from './shop-header/shop-info/shop-info.component';
import { ShopCartComponent } from './shop-header/shop-cart/shop-cart.component';
import { InfoComponent } from './info/info.component';

import { WebsiteEffect } from './shared/website_effect/website_effect';
import { ShortenPipe } from './shared/shorten.pipe';
import { failForm } from './info/fail-form';

import { RequestTService } from './material/info/table/table_ref/requestT.service';
import { RequestWService } from './material/nav/wishlist/wishlist_ref/requestW.service';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteEffect,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    GalleryComponent,
    ShopHeaderComponent,
    WishlistComponent,
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
  providers: [RequestTService, RequestWService],
  bootstrap: [AppComponent]
})

export class AppModule { }
