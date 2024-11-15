import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-module',
  templateUrl: './page-module.component.html',
  styleUrl: './page-module.component.scss'
})
export class PageModuleComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  nouveauModule(){
    this.router.navigate(['/dashboard/nouveaumodule'])
  }

}
