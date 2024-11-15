import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { EleveService } from '../../pages/eleves/eleve.service';




@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  
  constructor(private eleveService: EleveService){

  }
  
  ngOnInit(): void {
    //this.loadItems();
  }

  items: any[] = [];
  totalItems: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;

  displayedColumns: string[] = ['id', 'name']; // Ajoutez ici vos colonnes

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  // loadItems(): void {
  //   this.eleveService.getItems(this.pageIndex + 1, this.pageSize).subscribe(response => {
  //     this.items = response.items;
  //     this.totalItems = response.totalItems;
  //   });
  // }

  // onPageChange(event: PageEvent): void {
  //   this.pageIndex = event.pageIndex;
  //   this.pageSize = event.pageSize;
  //   this.loadItems();
  // }

}
