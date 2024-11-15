import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-salle-de-classe',
  templateUrl: './page-salle-de-classe.component.html',
  styleUrl: './page-salle-de-classe.component.scss'
})
export class PageSalleDeClasseComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouvelleSalle(){
    this.router.navigate(['/dashboard/nouvellesalledeclasse'])
  }

}
