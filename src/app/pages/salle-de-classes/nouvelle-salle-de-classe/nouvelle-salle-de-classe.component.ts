import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Cycle {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-nouvelle-salle-de-classe',
  templateUrl: './nouvelle-salle-de-classe.component.html',
  styleUrl: './nouvelle-salle-de-classe.component.scss'
})
export class NouvelleSalleDeClasseComponent implements OnInit {

  constructor( 
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  cycles: Cycle[] = [
    {value: 'premiercycle-0', viewValue: 'Cycle 1'},
    {value: 'deuxiemecycle-1', viewValue: 'Cycle 2'},
  ];

  cancel(){
    this.router.navigate(['/dashboard/salle-de-classe']);
  }

}
