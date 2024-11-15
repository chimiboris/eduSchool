import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-emploi-de-temps',
  templateUrl: './page-emploi-de-temps.component.html',
  styleUrl: './page-emploi-de-temps.component.scss'
})
export class PageEmploiDeTempsComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouveauEmploiDeTemps(){
    this.router.navigate(['/dashboard/nouveauemploidetemps'])
  }

}
