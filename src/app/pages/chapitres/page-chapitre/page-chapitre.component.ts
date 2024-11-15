import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-chapitre',
  templateUrl: './page-chapitre.component.html',
  styleUrl: './page-chapitre.component.scss'
})
export class PageChapitreComponent implements OnInit {
 
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouveauChapitre(){
    this.router.navigate(['/dashboard/nouveauchapitre'])
  }

}
