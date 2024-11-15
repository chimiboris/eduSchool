import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-niveau',
  templateUrl: './page-niveau.component.html',
  styleUrl: './page-niveau.component.scss'
})
export class PageNiveauComponent implements OnInit {

  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  nouveauNiveau(){
    this.router.navigate(['/dashboard/nouveauniveau'])
  }

}
