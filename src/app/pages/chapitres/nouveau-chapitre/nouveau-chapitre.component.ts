import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-chapitre',
  templateUrl: './nouveau-chapitre.component.html',
  styleUrl: './nouveau-chapitre.component.scss'
})
export class NouveauChapitreComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  cancel(){
    this.router.navigate(['/dashboard/chapitres']);
  }

}
