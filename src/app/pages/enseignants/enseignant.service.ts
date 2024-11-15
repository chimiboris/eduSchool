import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Enseignant } from './enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http: HttpClient) { }

  getEnseignantList(): Observable<Enseignant[]> {

    return this.http.get<Enseignant[]>('api/enseignants').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
    
  }

  getEnseignantById(eleveId: number): Observable<Enseignant|undefined> {
    
    return this.http.get<Enseignant>(`api/enseignants/${eleveId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
    
  }

  addEnseignant(enseignant: Enseignant): Observable<Enseignant>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Enseignant>('api/enseignants', enseignant, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  updateEnseignant(enseignant: Enseignant): Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put('api/enseignants', enseignant, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteEnseignantById(enseignantId: number): Observable<null>{
    return this.http.delete(`api/enseignants/${enseignantId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  searchEnseignantList(term: string): Observable<Enseignant[]>{
    if(term.length <= 1){
      return of([]);
    }

    return this.http.get<Enseignant[]>(`api/enseignants/?nom=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private apiUrl =  'api/enseignants';
  getItems(page: number, size: number): Observable<{ items: any[], totalItems: number }> {
    
    const params = {
      page: page.toString(),
      size: size.toString()
    };
    return this.http.get<{ items: any[], totalItems: number }>(this.apiUrl, { params });
  }

  private log(response: any){
    console.table(response);
  }
  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }
  
}
