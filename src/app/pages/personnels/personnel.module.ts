import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPersonnelComponent } from './detail-personnel/detail-personnel.component';
import { NouveauPersonnelComponent } from './nouveau-personnel/nouveau-personnel.component';
import { PagePersonnelComponent } from './page-personnel/page-personnel.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';
import { PersonnelDetailAllComponent } from './personnel-detail-all/personnel-detail-all.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchPersonnelComponent } from './search-personnel/search-personnel.component';



@NgModule({
  declarations: [
    PagePersonnelComponent,
    NouveauPersonnelComponent,
    DetailPersonnelComponent,
    PersonnelDetailAllComponent,
    SearchPersonnelComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatPaginatorModule,
    BoutonActionModule
  ]
})
export class PersonnelModule { }
