import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSpecialiteComponent } from './page-specialite/page-specialite.component';
import { NouvelleSpecialiteComponent } from './nouvelle-specialite/nouvelle-specialite.component';
import { DetailSpecialiteComponent } from './detail-specialite/detail-specialite.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';




@NgModule({
  declarations: [
    DetailSpecialiteComponent,
    NouvelleSpecialiteComponent,
    PageSpecialiteComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
   
  ],
  exports:[
    
  ]
})
export class SpecialiteModule { }
