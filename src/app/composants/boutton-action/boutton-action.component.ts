import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrl: './boutton-action.component.scss'
})
export class BouttonActionComponent implements OnInit {

  @Output()
  clickEvent = new EventEmitter(); 
  
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  bouttonNouveauClick(): void{
    this.clickEvent.emit();
  }

}
