import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-module',
  templateUrl: './nouveau-module.component.html',
  styleUrl: './nouveau-module.component.scss'
})
export class NouveauModuleComponent implements OnInit {

  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  cancel(){
    this.router.navigate(['/dashboard/modules']);
  }

}
