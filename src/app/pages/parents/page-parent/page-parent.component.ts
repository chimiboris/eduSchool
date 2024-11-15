import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Parent } from '../parent';
import { ParentService } from '../parent.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-page-parent',
  templateUrl: './page-parent.component.html',
  styleUrl: './page-parent.component.scss'
})
export class PageParentComponent implements OnInit {

  parentList : Parent[]|undefined;
  parent : Parent | undefined;


  paginatedEleveList: Parent[] = [];

  length = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  constructor( private router: Router, private parentService: ParentService ){}

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;
  
  ngOnInit(): void {
    
  }

  loadEnseignants(): void {
    this.parentService.getParentList().subscribe((parents: Parent[]) => {
      this.parentList = parents;
      this.length = parents.length;
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
    this.paginatedEleveList = this.parentList!.slice(startIndex, endIndex);
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

  nouveauParent(){
    this.router.navigate(['/dashboard/nouveauparent'])
  }
}

