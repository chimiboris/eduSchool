import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-cycle',
  templateUrl: './nouveau-cycle.component.html',
  styleUrl: './nouveau-cycle.component.scss'
})
export class NouveauCycleComponent implements OnInit {
  
  constructor(
    private router:Router
  ){}
  
  ngOnInit(): void {
    
  }

  cancel(){
    this.router.navigate(['/dashboard/cycles']);
  }

}
