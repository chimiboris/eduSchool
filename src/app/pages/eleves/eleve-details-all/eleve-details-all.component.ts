import { Component, Input, OnInit } from '@angular/core';
import { EleveService } from '../eleve.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Eleve } from '../eleve';

@Component({
  selector: 'app-eleve-details-all',
  templateUrl: './eleve-details-all.component.html',
  styleUrl: './eleve-details-all.component.scss'
})
export class EleveDetailsAllComponent implements OnInit {

  @Input()
  eleve: Eleve|undefined;
  eleveList: Eleve[] | undefined;
  

  constructor(private eleveService: EleveService, private route: ActivatedRoute,
              private router: Router){}
  
  ngOnInit() {
    const eleveId: string|null = this.route.snapshot.paramMap.get('id');
    if(eleveId){
      this.eleveService.getEleveById(+eleveId)
        .subscribe(eleve => this.eleve = eleve);
    }
    
  }

  goToElevePage(){
    this.router.navigate(['/dashboard/eleves']);
  }

  getEleveList(){
    this.router.navigate(['/dashboard/eleves']);
  }

  deleteEleve(eleve: Eleve){
    if(eleve.id){
      this.eleveService.deleteEleveById(eleve.id)
      .subscribe(() => this.getEleveList())     
    }

  }
  
}
