import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-specialite',
  templateUrl: './nouvelle-specialite.component.html',
  styleUrl: './nouvelle-specialite.component.scss'
})
export class NouvelleSpecialiteComponent implements OnInit {

  constructor(
    private router: Router
  ){}
 
  ngOnInit(): void {
    
  }

  cancel(){
    this.router.navigate(['/dashboard/specialites']);
  }

}
