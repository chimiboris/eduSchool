import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-emargement',
  templateUrl: './page-emargement.component.html',
  styleUrl: './page-emargement.component.scss'
})
export class PageEmargementComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouveauEmargement(){
    this;this.router.navigate(['/dashboard/nouveauemargement']);
  }

}
