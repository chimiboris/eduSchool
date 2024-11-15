import { Component, Input, OnInit } from '@angular/core';
import { Enseignant } from '../enseignant';
import { EnseignantService } from '../enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-enseignant',
  templateUrl: './detail-enseignant.component.html',
  styleUrl: './detail-enseignant.component.scss'
})
export class DetailEnseignantComponent implements OnInit {

  @Input() enseignantList: Enseignant[] = [];
  
  enseignant: Enseignant | undefined;
 
  constructor(private enseignantService: EnseignantService, private router: Router,
              ){}

  ngOnInit(): void {
    this.enseignantService.getEnseignantList()
      .subscribe(enseignantList => this.enseignantList = enseignantList);
  }

  detailTeacher(enseignant: Enseignant){
    this.router.navigate(['/dashboard/enseignantdetailall/', enseignant.id])
  }

  goToEditEnseignant(enseignant: Enseignant){
    this.router.navigate(['/dashboard/edit/enseignant', enseignant.id]);
  }

  getEnseignantList(){
    this.router.navigate(['/dashboard/enseignants']);
  }

  deleteEnseignant(enseignant: Enseignant){
    if(enseignant.id){
      this.enseignantService.deleteEnseignantById(enseignant.id)
      .subscribe(() => this.enseignantService.getEnseignantList());    
    }
  }

}
