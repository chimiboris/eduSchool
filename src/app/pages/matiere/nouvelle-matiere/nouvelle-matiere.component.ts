import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-matiere',
  templateUrl: './nouvelle-matiere.component.html',
  styleUrl: './nouvelle-matiere.component.scss'
})
export class NouvelleMatiereComponent implements OnInit {

  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  cancel(){
    this.router.navigate(['/dashboard/matieres']);
  }

}
