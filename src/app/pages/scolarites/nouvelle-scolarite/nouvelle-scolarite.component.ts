import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';

interface Etat {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-nouvelle-scolarite',
  templateUrl: './nouvelle-scolarite.component.html',
  styleUrl: './nouvelle-scolarite.component.scss'
})
export class NouvelleScolariteComponent implements OnInit {

  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }
  
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  etats: Etat[] = [
    {value: 'ok-0', viewValue: 'Ok'},
    {value: 'nonok-1', viewValue: 'Non ok'},
  
  ];

  cancel(){
    this.router.navigate(['/dashboard/scolarites']);
  }


}
