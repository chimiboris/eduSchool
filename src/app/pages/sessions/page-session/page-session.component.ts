import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-session',
  templateUrl: './page-session.component.html',
  styleUrl: './page-session.component.scss'
})
export class PageSessionComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouvelleSession(){
    this.router.navigate(['/dashboard/nouvellesession']);
  }

}
