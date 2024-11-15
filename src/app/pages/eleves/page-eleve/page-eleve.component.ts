import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EleveService } from '../eleve.service';
import { Eleve } from '../eleve';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-page-eleve',
  templateUrl: './page-eleve.component.html',
  styleUrl: './page-eleve.component.scss',
})
export class PageEleveComponent implements OnInit {

  eleveList: Eleve[]|undefined;
  eleve: Eleve|undefined;

  paginatedEleveList: Eleve[] = [];

  length = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  constructor(
    private router: Router, private eleveService: EleveService
  ){}

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;

  ngOnInit(): void {
    this.loadEleves();
  }

  loadEleves(): void {
    this.eleveService.getEleveList().subscribe((eleves: Eleve[]) => {
      this.eleveList = eleves;
      this.length = eleves.length;
      this.updatePaginatedList();
    });
  }

  handlePageEvent(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedList();
  }

  updatePaginatedList(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedEleveList = this.eleveList!.slice(startIndex, endIndex);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedList();
  }

  eleveForm(){
    this.router.navigate(['/dashboard/addeleve'])
  }

}
