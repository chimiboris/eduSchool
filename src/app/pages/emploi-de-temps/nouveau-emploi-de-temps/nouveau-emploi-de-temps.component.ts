import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-emploi-de-temps',
  templateUrl: './nouveau-emploi-de-temps.component.html',
  styleUrl: './nouveau-emploi-de-temps.component.scss'
})
export class NouveauEmploiDeTempsComponent implements OnInit {

  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  cancel(){
    this.router.navigate(['/dashboard/emplois-de-temps']);
  }

}
