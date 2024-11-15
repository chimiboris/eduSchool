import { Component, Input, OnInit } from '@angular/core';
import { EleveService } from '../eleve.service';
import { Eleve } from '../eleve';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-eleve',
  templateUrl: './detail-eleve.component.html',
  styleUrl: './detail-eleve.component.scss'
})
export class DetailEleveComponent implements OnInit {

  @Input() eleveList: Eleve[] = [];
  
  eleve: Eleve | undefined;
 
  constructor(private eleveService: EleveService, private router: Router,
                      ){}

  ngOnInit(): void {
    this.eleveService.getEleveList()
      .subscribe(eleveList => this.eleveList = eleveList);
  }

  detailStudent(eleve: Eleve){
    this.router.navigate(['/dashboard/elevedetailall/', eleve.id])
  }

  goToEditEleve(eleve: Eleve){
    this.router.navigate(['/dashboard/edit/eleve', eleve.id]);
  }

  getEleveList(){
    this.router.navigate(['/dashboard/eleves']);
  }

  deleteEleve(eleve: Eleve){
    if(eleve.id){
      this.eleveService.deleteEleveById(eleve.id)
      .subscribe(() => this.eleveService.getEleveList());    
    }
    //return this.router.navigate(['/dashboard/eleves'])
  }

}
