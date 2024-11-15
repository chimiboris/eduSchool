import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-lecon',
  templateUrl: './page-lecon.component.html',
  styleUrl: './page-lecon.component.scss'
})
export class PageLeconComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouvelleLecon(){
    this.router.navigate(['/dashboard/nouvelleleçon'])
  }

}
