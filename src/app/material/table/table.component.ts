
import { Component, OnInit } from "@angular/core";

import { DrinkDescService } from '../../Drink-desc.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['../../shared/generics.css', './table.component.css']
  })

export class TableComponent implements OnInit {

    postArray = [];

    constructor ( private DrinkDescService: DrinkDescService ) { }


    
    ngOnInit() {
        this.postArray = this.DrinkDescService.postArray;

        console.log(this.postArray);
    }
    
}