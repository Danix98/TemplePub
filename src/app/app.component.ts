
import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

import { RequestTService } from './material/info/table/table_ref/requestT.service';
import { RequestWService } from './material/nav/wishlist/wishlist_ref/requestW.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})



export class AppComponent implements OnInit {

  title = 'TemplePub';

  getVarInfo = false;
  mapStatus: boolean;

  constructor(
    private context: ChildrenOutletContexts,
    private RequestTService: RequestTService,
    private RequestWService: RequestWService ) {

    this.mapStatus = this.getVarInfo ? true : false;
  }


  getVisibility() {
    return this.mapStatus === true ? 'block' : 'none';
  }

  getRouteAnimationData() {
    return this.context.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngOnInit() {
    this.RequestTService.getPost();
    this.RequestWService.sendOnList();
  }

}
