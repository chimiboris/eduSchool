import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-departement',
  templateUrl: './page-departement.component.html',
  styleUrl: './page-departement.component.scss'
})
export class PageDepartementComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouveauDepartement(){
    this.router.navigate(['/dashboard/nouveaudepartement'])
  }

}
