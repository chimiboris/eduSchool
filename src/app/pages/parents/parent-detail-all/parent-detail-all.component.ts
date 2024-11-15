import { Component, Input, OnInit } from '@angular/core';
import { Parent } from '../parent';
import { ParentService } from '../parent.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent-detail-all',
  templateUrl: './parent-detail-all.component.html',
  styleUrl: './parent-detail-all.component.scss'
})
export class ParentDetailAllComponent implements OnInit {

  @Input()
  parent: Parent|undefined;
  parentList: Parent[]|undefined;

  constructor(private parentService: ParentService, private route: ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit(): void {
    const parentId: string|null = this.route.snapshot.paramMap.get('id');
    if(parentId){
      this.parentService.getParentById(+parentId)
      .subscribe(parent => this.parent = parent)
    }
  }

  goToParentPage(){
    this.router.navigate(['/dashboard/parents']);
  }

  getParentList(){
    this.router.navigate(['/dashboard/parents']);
  }

  deleteParent(parent: Parent){
    if(parent.id){
      this.parentService.deleteParentById(parent.id)
      .subscribe(() => this.getParentList());
    }
  }


}
