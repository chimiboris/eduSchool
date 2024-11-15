import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-lecon',
  templateUrl: './nouvelle-lecon.component.html',
  styleUrl: './nouvelle-lecon.component.scss'
})
export class NouvelleLeconComponent implements OnInit {

  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  cancel(){
    this.router.navigate(['/dashboard/leçons']);
  }

}
