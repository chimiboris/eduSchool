import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-note',
  templateUrl: './page-note.component.html',
  styleUrl: './page-note.component.scss'
})
export class PageNoteComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  nouvelleNote(){
    this.router.navigate(['/dashboard/nouvellenote'])
  }

}
