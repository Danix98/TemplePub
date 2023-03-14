
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';

import { RequestService } from './table_ref/request.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html'
})



export class TableComponent implements AfterViewInit {

    displayCol: string[] = ['email', 'messaggio'];
    data = this.RequestService.dataSource;
    items_xpage: number[] = [1, 5, 10];
    
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor( private RequestService: RequestService ) { }



    ngAfterViewInit() {
        this.RequestService.dataSource.paginator = this.paginator;
    }
}
