import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCoursComponent } from './detail-cours/detail-cours.component';
import { NouveauCoursComponent } from './nouveau-cours/nouveau-cours.component';
import { PageCoursComponent } from './page-cours/page-cours.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    NouveauCoursComponent,
    DetailCoursComponent,
    PageCoursComponent, 
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class CoursModule { }
