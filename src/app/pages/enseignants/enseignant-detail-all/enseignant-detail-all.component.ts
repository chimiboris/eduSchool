import { Component, Input } from '@angular/core';
import { Enseignant } from '../enseignant';
import { EnseignantService } from '../enseignant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enseignant-detail-all',
  templateUrl: './enseignant-detail-all.component.html',
  styleUrl: './enseignant-detail-all.component.scss'
})
export class EnseignantDetailAllComponent {

  @Input()
  enseignant: Enseignant|undefined;
  enseignantList: Enseignant[] | undefined;
  

  constructor(private enseignantService: EnseignantService, private route: ActivatedRoute,
              private router: Router){}
  
  ngOnInit() {
    const enseignantId: string|null = this.route.snapshot.paramMap.get('id');
    if(enseignantId){
      this.enseignantService.getEnseignantById(+enseignantId)
        .subscribe(enseignant => this.enseignant = enseignant);
    }
    
  }

  goToEnseignantPage(){
    this.router.navigate(['/dashboard/enseignants']);
  }

  getEnseignantList(){
    this.router.navigate(['/dashboard/enseignants']);
  }

  deleteEnseignant(enseignant: Enseignant){
    if(enseignant.id){
      this.enseignantService.deleteEnseignantById(enseignant.id)
      .subscribe(() => this.getEnseignantList())     
    }
    
  }

}
