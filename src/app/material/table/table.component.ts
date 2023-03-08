
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';

import { RequestService } from './table_ref/request.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['../../shared/generics.css', './table.component.css']
})



export class TableComponent implements AfterViewInit {

    displayCol: string[] = ['email', 'messaggio'];
    data = this.RequestService.dataSource;
    
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor( private RequestService: RequestService ) { }



    ngAfterViewInit() {
        this.RequestService.dataSource.paginator = this.paginator;
    }
}
