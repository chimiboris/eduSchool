import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Personnel } from './personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }

  getPersonnelList(): Observable<Personnel[]>{
    return this.http.get<Personnel[]>('api/personnels').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getPersonnelById(personnelId: number): Observable<Personnel|undefined>{
    return this.http.get<Personnel>(`api/personnels/${personnelId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  addPersonnel(personnel: Personnel): Observable<Personnel>{
    const httpOptions = {
      headers: new HttpHeaders ({'Content-Type': 'application/json'})
    };

    return this.http.post<Personnel>('api/personnels', personnel, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  updatePersonnel(personnel: Personnel):Observable<Personnel>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put<Personnel>('api/personnels', personnel, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  deletePersonnelById(personnelId: number): Observable<null>{
    return this.http.delete<Personnel>(`api/personnels/${personnelId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  searchPersonnelList(term: string): Observable<Personnel[]> {

    if(term.length <= 1){
      return of([]);
    };

    return this.http.get<Personnel>(`api/personnels/?nom=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );

  }

  private apiUrl =  'api/personnels';
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
