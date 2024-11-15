import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EleveService } from '../eleve.service';
import { Eleve } from '../eleve';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-eleve',
  templateUrl: './edit-eleve.component.html',
  styleUrl: './edit-eleve.component.scss'
})
export class EditEleveComponent implements OnInit {

  pageTitle: string|undefined;
  eleve: Eleve|undefined;
  
  
  constructor(private route: ActivatedRoute, private eleveService: EleveService)
  {
    
  }
  
  ngOnInit(): void {
    const eleveId: string|null = this.route.snapshot.paramMap.get('id');
    if(eleveId){
      this.pageTitle = 'Éditer l\'élève';
      this.eleveService.getEleveById(+eleveId).subscribe(eleve => this.eleve = eleve);
    }else{
      this.eleve = undefined;
    }
  }

}
