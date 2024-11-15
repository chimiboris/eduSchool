import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-scolarite',
  templateUrl: './page-scolarite.component.html',
  styleUrl: './page-scolarite.component.scss'
})
export class PageScolariteComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouvelleScolarite(){
    this.router.navigate(['/dashboard/nouvellescolarite']);
  }

}
