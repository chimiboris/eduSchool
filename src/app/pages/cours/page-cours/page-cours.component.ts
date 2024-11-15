import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cours',
  templateUrl: './page-cours.component.html',
  styleUrl: './page-cours.component.scss'
})
export class PageCoursComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouveauCours(){
    this.router.navigate(['/dashboard/nouveaucours'])
  }

}
