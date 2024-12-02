import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { ParentService } from '../parent.service';
import { Router } from '@angular/router';
import { Parent } from '../parent';

@Component({
  selector: 'app-search-parent',
  templateUrl: './search-parent.component.html',
  styleUrl: './search-parent.component.scss'
})
export class SearchParentComponent implements OnInit{

  parent$: Observable<any[]>|undefined;
  searchTerms= new BehaviorSubject<string>('');

  constructor(private router:Router, private parentService: ParentService){}

  ngOnInit(): void {

    this.parent$ = this.searchTerms.pipe(
       //{..."a"."ab"..."abz"."ab"..."abc".....}
       debounceTime(300),
       //{...."ab"...."ab"..."abc"......}
       distinctUntilChanged(),
       //{......"ab"......"abc"......}
       switchMap((term) => this.parentService.searchParentList(term))
       // {.....Observable<"ab">............Observable<"abc">........}
       // concatMap / mergeMap / SwitchMap
    )
  }

  search(term: string){
    this.searchTerms.next(term);
  }

  goToDetail(parent: Parent){
    const link = ['/dashboard/parentdetailall/', parent.id];
    this.router.navigate(link);
  }
  
}
