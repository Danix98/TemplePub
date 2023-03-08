
import { Component, OnInit } from '@angular/core';

import { RequestService } from './material/table/table_ref/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})



export class AppComponent implements OnInit {

  title = 'TemplePub';

  getVarInfo = false;
  mapStatus: boolean;

  constructor( private RequestService: RequestService ) {

    this.mapStatus = this.getVarInfo ? true : false;
  }
  getVisibility() {
    return this.mapStatus === true ? 'block' : 'none';
  }



  ngOnInit() {
    this.RequestService.getPost();
  }

}
