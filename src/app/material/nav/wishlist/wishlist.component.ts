
import { Component } from '@angular/core';

import { RequestWService } from './wishlist_ref/requestW.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})



export class WishlistComponent {

  names = this.RequestWService.list_data;

  constructor( private RequestWService: RequestWService ) { }

}