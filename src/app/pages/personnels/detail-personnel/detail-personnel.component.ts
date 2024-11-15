import { Component, Input, OnInit } from '@angular/core';
import { Personnel } from '../personnel';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-detail-personnel',
  templateUrl: './detail-personnel.component.html',
  styleUrl: './detail-personnel.component.scss'
})
export class DetailPersonnelComponent implements OnInit {

  @Input() personnelList: Personnel[] = [];
  
  personnel:Personnel|undefined;

  constructor(private router: Router, private route: ActivatedRoute,
    private personnelService: PersonnelService
  ){}
  
  ngOnInit(): void {
    this.personnelService.getPersonnelList()
    .subscribe((personnelList) => this.personnelList = personnelList)
  }

  detailPersonnel(personnel: Personnel){
    this.router.navigate(['/dashboard/personneldetailall/', personnel.id])
  }

  updatePersonnel(personnel: Personnel){

  }

  goToEditPersonnel(personnel: Personnel){
    this.router.navigate(['/dashboard/edit/personnel', personnel.id]);
  }

  getPersonnelList(){
    this.router.navigate(['/dashboard/personnels']);
  }

  deletePersonnel(personnel: Personnel){
    if(personnel.id){
      this.personnelService.deletePersonnelById(personnel.id)
      .subscribe(() => this.getPersonnelList());
    }
  }

}
