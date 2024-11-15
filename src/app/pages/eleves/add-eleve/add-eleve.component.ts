import { Component, OnInit } from '@angular/core';
import { Eleve } from '../eleve';

@Component({
  selector: 'app-add-eleve',
  templateUrl: './add-eleve.component.html',
  styleUrl: './add-eleve.component.scss'
})
export class AddEleveComponent implements OnInit {
  
  eleve: Eleve|undefined;

  ngOnInit(): void {
    this.eleve = new Eleve();
  }

    

}
