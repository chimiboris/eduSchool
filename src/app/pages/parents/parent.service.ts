import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Parent } from './parent';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }

  getParentList(): Observable<Parent[]> {
    
    return this.http.get<Parent[]>('api/parents').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getParentById(parentId: number): Observable<Parent|undefined> {

    return this.http.get<Parent>(`api/parents/${parentId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  addParent(parent: Parent): Observable<Parent> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Parent>('api/parents', parent, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  updateParent(parent: Parent): Observable<null> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put<Parent>('api/parents', parent, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );

  }

  deleteParentById(parentId: number): Observable<null>{

    return this.http.delete<Parent>(`api/parents/${parentId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )

  }

  searchParentList(term: string): Observable<Parent[]> {

    if(term.length <= 1){
      return of([]);
    };

    return this.http.get<Parent>(`api/parents/?nom=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );

  }

  private apiUrl =  'api/parents';
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
