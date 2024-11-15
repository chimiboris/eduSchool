import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailNiveauComponent } from './detail-niveau/detail-niveau.component';
import { NouveauNiveauComponent } from './nouveau-niveau/nouveau-niveau.component';
import { PageNiveauComponent } from './page-niveau/page-niveau.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    NouveauNiveauComponent,
    PageNiveauComponent,
    DetailNiveauComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class NiveauModule { }
