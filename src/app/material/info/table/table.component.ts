
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';

import { RequestTService } from './table_ref/requestT.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html'
})



export class TableComponent implements AfterViewInit {

    displayCol: string[] = ['email', 'messaggio'];
    data = this.RequestService.dataSource;
    items_xpage: number[] = [1, 5, 10];
    
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor( private RequestService: RequestTService ) { }



    ngAfterViewInit() {
        this.RequestService.dataSource.paginator = this.paginator;
    }
}
