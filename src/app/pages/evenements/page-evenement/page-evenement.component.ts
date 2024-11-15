import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-evenement',
  templateUrl: './page-evenement.component.html',
  styleUrl: './page-evenement.component.scss'
})
export class PageEvenementComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouveauEvenement(){
    this.router.navigate(['/dashboard/nouveauevenement']);
  }

}
