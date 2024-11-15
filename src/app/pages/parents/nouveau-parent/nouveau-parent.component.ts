import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Parent } from '../parent';

@Component({
  selector: 'app-nouveau-parent',
  templateUrl: './nouveau-parent.component.html',
  styleUrl: './nouveau-parent.component.scss'
})
export class NouveauParentComponent implements OnInit {

  parent: Parent|undefined

  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.parent = new Parent();
  }

  selectedValue: string | undefined;
  selectedCar: string | undefined;

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

  cancel(){
    this.router.navigate(['/dashboard/parents']);
  }

}
