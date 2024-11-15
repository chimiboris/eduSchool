import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../enseignant';
import { ActivatedRoute } from '@angular/router';
import { EnseignantService } from '../enseignant.service';

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrl: './edit-enseignant.component.scss'
})
export class EditEnseignantComponent implements OnInit {
  
  pageTitle: string|undefined;
  enseignant: Enseignant|undefined;

  constructor(private route: ActivatedRoute, private enseignantService: EnseignantService){}

  ngOnInit(): void {
    const enseignantId: string|null = this.route.snapshot.paramMap.get('id');
    if(enseignantId){
      this.pageTitle = 'Éditer l\'enseignant(e)';
      this.enseignantService.getEnseignantById(+enseignantId)
      .subscribe(enseignant => this.enseignant = enseignant)
    }else{
      this.enseignant = undefined;
    }
  }


}
