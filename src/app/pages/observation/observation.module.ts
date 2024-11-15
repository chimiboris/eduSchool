import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailObservationComponent } from './detail-observation/detail-observation.component';
import { PageObservationComponent } from './page-observation/page-observation.component';
import { NouvelleObservationComponent } from './nouvelle-observation/nouvelle-observation.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    PageObservationComponent,
    NouvelleObservationComponent,
    DetailObservationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class ObservationModule { }
