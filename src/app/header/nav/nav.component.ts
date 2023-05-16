
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['../../shared/generics.css', './nav.component.css']
})


export class NavComponent {
  
  constructor( public router: Router ) { } //*ngIf wishlist
}
