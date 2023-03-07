
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';

import { Element } from './material/table/table_ref/table.interface';
import { RequestService } from './material/table/table_ref/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})



export class AppComponent implements OnInit {
  
  title = 'TemplePub';

  getVarInfo = false;
  mapStatus: boolean;

  constructor( private http: HttpClient, private RequestService: RequestService ) {

    this.mapStatus = this.getVarInfo ? true : false;
  }
  getVisibility() {
    return this.mapStatus === true ? 'block' : 'none';
  }



  ngOnInit() {
    this.getPost();
  }

  getPost() {
    
    this.http
    .get('https://templepub-eb4ae-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    .pipe(map(responseData => {
      
      const getArray = [];
    
      for(const k in responseData) {
        if(responseData.hasOwnProperty(k)) {
          getArray.push( {id: k, ...responseData[k]} );
        }
      }
      return getArray;
    
    }))
    .subscribe({
      next: (postArray) => {

        // console.log(postArray);

        this.RequestService.ELEMENT_DATA = postArray;
        this.RequestService.dataSource = new MatTableDataSource<Element>(postArray);
      }
    })

  }

}
