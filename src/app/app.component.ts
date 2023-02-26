
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})



export class AppComponent {
  
  title = 'TemplePub';

  getVarInfo = false;
  mapStatus: boolean;

  constructor() { this.mapStatus = this.getVarInfo ? true : false; }



  getVisibility() {
    return this.mapStatus === true ? 'block' : 'none';
  }

}
