import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { PersonnelService } from '../personnel.service';
import { Router } from '@angular/router';
import { Personnel } from '../personnel';

@Component({
  selector: 'app-search-personnel',
  templateUrl: './search-personnel.component.html',
  styleUrl: './search-personnel.component.scss'
})
export class SearchPersonnelComponent implements OnInit {

  personnel$: Observable<any[]>|undefined;
  searchTerms = new BehaviorSubject<string>('');

  constructor(private router: Router, private personnelService: PersonnelService){}
  
  ngOnInit(): void {
    this.personnel$ = this.searchTerms.pipe(
      //{..."a"."ab"..."abz"."ab"..."abc".....}
      debounceTime(300),
      //{...."ab"...."ab"..."abc"......}
      distinctUntilChanged(),
      //{......"ab"......"abc"......}
      switchMap((term) => this.personnelService.searchPersonnelList(term))
    )
  }

  search(term: string){
    this.searchTerms.next(term);
  }

  goToDetail(personnel: Personnel){
    const link = ['/dashboard/personneldetailall/', personnel.id];
    this.router.navigate(link);
  }

}
