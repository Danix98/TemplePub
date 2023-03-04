
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { RequestService } from './table_ref/request.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['../../shared/generics.css', './table.component.css']
})



export class TableComponent implements AfterViewInit {

    ELEMENT_DATA: Element[] = this.RequestService.getArray;

    displayCol: string[] = ['email', 'messaggio'];
    dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor( private RequestService: RequestService ) { }



    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}
