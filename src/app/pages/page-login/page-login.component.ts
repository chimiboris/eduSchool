import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,
              private fb: FormBuilder){
              }
  
  ngOnInit(): void {
    this.auth = this.authService;
  }

  adresse: string | undefined;
  password: string | undefined;
  auth: AuthService | undefined;
  message: string = 'Vous etes déconnecté. (admin@gmail.com / admin)'
  public loginForm: FormGroup|undefined;
  
  

  setMessage(){
    if(this.auth?.isLoggedIn){
      this.message = 'Vous etes connectés !';
    }else{
      this.message = 'Adresse ou mot de passe incorrect !';    
    }
  }

  login(){
    this.message = 'Tentative de connexion en cours...';
    this.auth?.login(this.adresse!, this.password!)
    .subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if(isLoggedIn){
        this.router.navigate(['/dashboard/eleves']);
        console.log('connexion réussie')
      }else{
        this.password = '';
        this.router.navigate(['/login']);
        console.log('connexion échouée');
      }
    })
  }

  logout(){
    this.auth?.logout();
    this.message = 'Vous etes déconnecté !';
  }

  email = new FormControl( '' , [Validators.required, Validators.email]);
  errorMessage = '';
  hide = true;
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }


  
 }



