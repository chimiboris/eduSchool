import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../enseignant.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Enseignant } from '../enseignant';

@Component({
  selector: 'app-page-enseignant',
  templateUrl: './page-enseignant.component.html',
  styleUrl: './page-enseignant.component.scss'
})
export class PageEnseignantComponent implements OnInit {
  
  enseignantList: Enseignant[]|undefined;
  enseignant: Enseignant|undefined;

  paginatedEnseignantList: Enseignant[] = [];

  length = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  constructor(
    private router: Router, private enseignantService: EnseignantService
  ){}

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;
  
  ngOnInit(): void {
    this.loadEnseignants();
  }

  loadEnseignants(): void {
    this.enseignantService.getEnseignantList().subscribe((enseignants: Enseignant[]) => {
      this.enseignantList = enseignants;
      this.length = enseignants.length;
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
    this.paginatedEnseignantList = this.enseignantList!.slice(startIndex, endIndex);
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

  nouveauEnseignant(){
    this.router.navigate(['/dashboard/addenseignant'])
  }

}
