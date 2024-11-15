import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-departement',
  templateUrl: './nouveau-departement.component.html',
  styleUrl: './nouveau-departement.component.scss'
})
export class NouveauDepartementComponent implements OnInit {
 
  constructor(
    private router: Router
  ){}
 
  ngOnInit(): void {
    
  }

  cancel(){
    this.router.navigate(['/dashboard/departements']);
  }

}
