import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-matiere',
  templateUrl: './page-matiere.component.html',
  styleUrl: './page-matiere.component.scss'
})
export class PageMatiereComponent implements OnInit {
 
  constructor(
    private router: Router
  ){}
 
  ngOnInit(): void {
    
  }

  nouvelleMatiere(){
    this.router.navigate(['/dashboard/nouvellematiere'])
  }

}
