import { Component, OnInit } from '@angular/core';
import { Eleve } from '../eleve';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { EleveService } from '../eleve.service';

@Component({
  selector: 'app-search-eleve',
  templateUrl: './search-eleve.component.html',
  styleUrl: './search-eleve.component.scss'
})
export class SearchEleveComponent implements OnInit {

  searchTerms = new Subject<string>();
  eleve$: Observable<Eleve[]>|undefined;
  
  constructor(private router: Router, private eleveService: EleveService){

  }
  
  ngOnInit(): void {
    
    this.eleve$ = this.searchTerms.pipe(
      //{..."a"."ab"..."abz"."ab"..."abc".....}
      debounceTime(300),
      //{...."ab"...."ab"..."abc"......}
      distinctUntilChanged(),
      //{......"ab"......"abc"......}
      switchMap((term) => this.eleveService.searchEleveList(term))
      // {.....Observable<"ab">............Observable<"abc">........}
      // concatMap / mergeMap / SwitchMap
    );
  }

  search(term: string){
    this.searchTerms.next(term);
  }

  goToDetail(eleve: Eleve){
    const link = ['/dashboard/elevedetailall/', eleve.id];
    this.router.navigate(link);
  }

}
