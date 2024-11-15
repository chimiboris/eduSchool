import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;
  redirectUrl: string | undefined;

  login(adresse: string, password: string): Observable<boolean>{
    const LoggedIn = (adresse == 'admin@gmail.com' && password == 'admin');
    console.log('identifiant correct')
    return of(LoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    )
  }

  logout(){
    this.isLoggedIn = false;
  }

}
