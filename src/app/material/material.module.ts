
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
  //in component info del progetto
import { MatMenuModule } from '@angular/material/menu';
  //in component nav del progetto



//icone utilizzate in branch responsive

const MaterialComponents = [
  MatTableModule,
  MatPaginatorModule,
  MatMenuModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
