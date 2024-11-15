import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../enseignant';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrl: './add-enseignant.component.scss'
})
export class AddEnseignantComponent implements OnInit {

  enseignant: Enseignant|undefined;

  ngOnInit(): void {
    this.enseignant = new Enseignant();
  }

}
