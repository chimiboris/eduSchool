import { Component } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap } from 'rxjs';
import { Enseignant } from '../enseignant';
import { Router } from '@angular/router';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-search-enseignant',
  templateUrl: './search-enseignant.component.html',
  styleUrl: './search-enseignant.component.scss'
})
export class SearchEnseignantComponent {

  enseignant$: Observable<any[]>|undefined;
  private searchTerms = new BehaviorSubject<string>('');
  
  constructor(private router: Router, private enseignantService: EnseignantService){

  }
  
  ngOnInit(): void {
    
    this.enseignant$ = this.searchTerms.pipe(
      //{..."a"."ab"..."abz"."ab"..."abc".....}
      debounceTime(300),
      //{...."ab"...."ab"..."abc"......}
      distinctUntilChanged(),
      //{......"ab"......"abc"......}
      switchMap((term) => this.enseignantService.searchEnseignantList(term))
      // {.....Observable<"ab">............Observable<"abc">........}
      // concatMap / mergeMap / SwitchMap
    );


  }

  search(term: string){
    this.searchTerms.next(term);
  }

  goToDetail(enseignant: Enseignant){
    const link = ['/dashboard/enseignantdetailall/', enseignant.id];
    this.router.navigate(link);
  }

}
