import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-emargement',
  templateUrl: './nouveau-emargement.component.html',
  styleUrl: './nouveau-emargement.component.scss'
})
export class NouveauEmargementComponent implements OnInit {

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

  cancel(){
    this.router.navigate(['/dashboard/emargements']);
  }


}