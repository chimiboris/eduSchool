import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Section {
  value: string;
  viewValue: string;
}
interface TypeEnseignement {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrl: './page-inscription.component.scss'
})
export class PageInscriptionComponent {
  
  pageTitle = 'Inscrivez-vous ici';
  hide = true;
  emaill = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';

  updateErrorMessage() {
    if (this.emaill.hasError('Émail requis')) {
      this.errorMessage = 'Vous devez entrer une valeur';
    } else if (this.emaill.hasError('email')) {
      this.errorMessage = 'Email non valid';
    } else {
      this.errorMessage = '';
    }
  }

  selectedValue: string | undefined;
  selectedCar: string | undefined;

  sections: Section[] = [
    {value: 'anglophone-0', viewValue: 'Anglophone'},
    {value: 'francophone-1', viewValue: 'Francophone'},
    {value: 'bilingue-2', viewValue: 'Bilingue'},
  ];
  typeEnseignements: TypeEnseignement[] = [
    {value: 'general-0', viewValue: 'Général'},
    {value: 'technique-1', viewValue: 'Technique'},
    {value: 'generaltechnique-2', viewValue: 'Général et Technique'},
  ];
  

  
}
