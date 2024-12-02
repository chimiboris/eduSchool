import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouveauParentComponent } from './nouveau-parent/nouveau-parent.component';
import { DetailParentComponent } from './detail-parent/detail-parent.component';
import { PageParentComponent } from './page-parent/page-parent.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';
import { EditParentComponent } from './edit-parent/edit-parent.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ParentDetailAllComponent } from './parent-detail-all/parent-detail-all.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchParentComponent } from './search-parent/search-parent.component';



@NgModule({
  declarations: [
    PageParentComponent,
    DetailParentComponent,
    NouveauParentComponent,
    EditParentComponent,
    ParentFormComponent,
    ParentDetailAllComponent,
    SearchParentComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatPaginatorModule,
    BoutonActionModule
  ]
})
export class ParentModule { }
