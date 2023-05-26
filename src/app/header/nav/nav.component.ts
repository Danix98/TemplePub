
import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { RequestWService } from '../../material/nav/wishlist/wishlist_ref/requestW.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['../../shared/generics.css', './nav.component.css'],
})


export class NavComponent implements DoCheck {
  
//guard attiva wishlist
  checked: boolean = false;

  constructor( public router: Router, private RequestWService: RequestWService ) { }



//controlla (se e quanto ==> true, else => false) visualizzazione vetrina
  ngDoCheck() {
    this.onChecked();
  }

  onChecked() {
    setTimeout(() => {
      this.checked = this.RequestWService.check;
      }, 2000)
  }
  
}
