import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';

interface Contrat {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-nouveau-personnel',
  templateUrl: './nouveau-personnel.component.html',
  styleUrl: './nouveau-personnel.component.scss'
})
export class NouveauPersonnelComponent implements OnInit {

  personnelForm: FormGroup|undefined;

  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
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

  contrats: Contrat[] = [
    {value: 'cdd-0', viewValue: 'CDD'},
    {value: 'cdi-1', viewValue: 'CDI'},
  ];

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  cancel(){
    this.router.navigate(['/dashboard/personnels']);
  }
 

}
