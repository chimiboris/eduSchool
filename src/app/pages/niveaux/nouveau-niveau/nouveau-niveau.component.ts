import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-niveau',
  templateUrl: './nouveau-niveau.component.html',
  styleUrl: './nouveau-niveau.component.scss'
})
export class NouveauNiveauComponent implements OnInit {

  constructor(
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  cancel(){
    this.router.navigate(['/dashboard/niveaux']);
  }

}
