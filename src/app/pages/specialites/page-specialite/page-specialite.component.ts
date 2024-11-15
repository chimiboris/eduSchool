import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-specialite',
  templateUrl: './page-specialite.component.html',
  styleUrl: './page-specialite.component.scss'
})
export class PageSpecialiteComponent implements OnInit{
  
  constructor(
    private router: Router 
  ){}
  
  ngOnInit(): void {
    
  }

  nouvelleSpecialite(){
    this.router.navigate(['/dashboard/nouvellespecialite'])
  }

}
