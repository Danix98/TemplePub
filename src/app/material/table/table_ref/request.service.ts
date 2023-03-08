
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';

import { Element } from './table.interface';



@Injectable()
export class RequestService {
    constructor( private http: HttpClient ) { }



    ELEMENT_DATA: Element[]; //[.... , ..... | .... , ..... | ..etc]
    dataSource: any;

    postReq_load: boolean = true;

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
    
            this.ELEMENT_DATA = postArray;
            this.dataSource = new MatTableDataSource<Element>(postArray);
          }
        })
    
      }
}
