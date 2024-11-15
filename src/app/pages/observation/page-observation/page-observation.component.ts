import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-observation',
  templateUrl: './page-observation.component.html',
  styleUrl: './page-observation.component.scss'
})
export class PageObservationComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouvelleDiscipline(){
    this.router.navigate(['/dashboard/nouvelleobservation'])
  }

}
