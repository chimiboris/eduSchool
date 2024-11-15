import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Personnel } from '../personnel';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-page-personnel',
  templateUrl: './page-personnel.component.html',
  styleUrl: './page-personnel.component.scss'
})
export class PagePersonnelComponent implements OnInit {
   
  personnelList: Personnel[]|undefined;
  personnel: Personnel|undefined;

  paginatedPersonnelList: Personnel[] = [];

  length = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  constructor(
    private router: Router, private personnelService: PersonnelService
  ){}

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;
  
  ngOnInit(): void {
    this.loadPersonnels();
  }

  loadPersonnels(): void {
    this.personnelService.getPersonnelList().subscribe((personnels: Personnel[]) => {
      this.personnelList = personnels;
      this.length = personnels.length;
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
    this.paginatedPersonnelList = this.personnelList!.slice(startIndex, endIndex);
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


  nouveauPersonnel(){
    this.router.navigate(['/dashboard/nouveaupersonnel'])
  }

}
