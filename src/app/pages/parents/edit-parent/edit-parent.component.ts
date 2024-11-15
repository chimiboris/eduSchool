import { Component } from '@angular/core';
import { Parent } from '../parent';
import { ActivatedRoute } from '@angular/router';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-edit-parent',
  templateUrl: './edit-parent.component.html',
  styleUrl: './edit-parent.component.scss'
})
export class EditParentComponent {

  pageTitle: string|undefined;
  parent: Parent|undefined;

  constructor(private route: ActivatedRoute, private parentService: ParentService){}

  ngOnInit(): void {
    const parentId: string|null = this.route.snapshot.paramMap.get('id');
    if(parentId){
      this.pageTitle = 'Éditer le parent';
      this.parentService.getParentById(+parentId)
      .subscribe(parent => this.parent = parent)
    }else{
      this.parent = undefined;
    }
}

}
