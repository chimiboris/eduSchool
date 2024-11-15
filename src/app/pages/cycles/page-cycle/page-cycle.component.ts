import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cycle',
  templateUrl: './page-cycle.component.html',
  styleUrl: './page-cycle.component.scss'
})
export class PageCycleComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  nouveauCycle(){
    this.router.navigate(['/dashboard/nouveaucycle'])
  }

}
