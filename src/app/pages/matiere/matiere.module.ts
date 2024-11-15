import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouvelleMatiereComponent } from './nouvelle-matiere/nouvelle-matiere.component';
import { DetailMatiereComponent } from './detail-matiere/detail-matiere.component';
import { PageMatiereComponent } from './page-matiere/page-matiere.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    PageMatiereComponent,
    DetailMatiereComponent,
    NouvelleMatiereComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class MatiereModule { }
