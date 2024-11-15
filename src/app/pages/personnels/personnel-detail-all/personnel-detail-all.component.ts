import { Component, Input, OnInit } from '@angular/core';
import { Personnel } from '../personnel';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-personnel-detail-all',
  templateUrl: './personnel-detail-all.component.html',
  styleUrl: './personnel-detail-all.component.scss'
})
export class PersonnelDetailAllComponent implements OnInit {

  @Input()
  personnel: Personnel|undefined;
  personnelList: Personnel[]|undefined;

  constructor(private router: Router, private route: ActivatedRoute,
    private personnelService: PersonnelService
  ){}

  ngOnInit(): void {
    const personnelId: string|null = this.route.snapshot.paramMap.get('id');
    if(personnelId){
      this.personnelService.getPersonnelById(+personnelId)
      .subscribe((personnel) => this.personnel = personnel)
    } 
  }

  goToPersonnelPage(){
    this.router.navigate(['/dashboard/personnels']);
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
