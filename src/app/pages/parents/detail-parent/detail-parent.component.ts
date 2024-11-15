import { Component, Input, OnInit } from '@angular/core';
import { Parent } from '../parent';
import { ParentService } from '../parent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-parent',
  templateUrl: './detail-parent.component.html',
  styleUrl: './detail-parent.component.scss'
})
export class DetailParentComponent implements OnInit {

  @Input() parentList: Parent[] = [];

  parent: Parent | undefined;

  constructor(private parentService: ParentService, private router: Router) {}

  ngOnInit(): void {
    this.parentService.getParentList()
    .subscribe(parentList => this.parentList = parentList)
  }

  detailParent(parent: Parent){
    this.router.navigate(['/dashboard/parentdetailall/', parent.id])
  }

  goToEditParent(parent: Parent){
    this.router.navigate(['/dashboard/edit/parent', parent.id]);
  }

  getParentsList(){
    this.router.navigate(['/dashboard/parents']);
  }

  deleteParent(parent: Parent){
    if(parent.id){
      this.parentService.deleteParentById(parent.id)
    .subscribe(() => this.parentService.getParentList());
    }
  }


}
