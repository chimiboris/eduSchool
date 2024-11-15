import { Injectable } from '@angular/core';
import { Eleve } from './eleve';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  constructor(private http: HttpClient) { }

  getEleveList(): Observable<Eleve[]> {

    return this.http.get<Eleve[]>('api/eleves').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
    
  }

  getEleveById(eleveId: number): Observable<Eleve|undefined> {
    
    return this.http.get<Eleve>(`api/eleves/${eleveId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
    
  }

  addEleve(eleve: Eleve): Observable<Eleve>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Eleve>('api/eleves', eleve, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  updateEleve(eleve: Eleve): Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put('api/eleves', eleve, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteEleveById(eleveId: number): Observable<null>{
    return this.http.delete(`api/eleves/${eleveId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  searchEleveList(term: string): Observable<Eleve[]>{
    if(term.length <= 1){
      return of([]);
    }

    return this.http.get<Eleve[]>(`api/eleves/?nom=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private log(response: any){
    console.table(response);
  }
  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

}
