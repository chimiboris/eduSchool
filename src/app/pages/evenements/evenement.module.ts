import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailEvenementComponent } from './detail-evenement/detail-evenement.component';
import { PageEvenementComponent } from './page-evenement/page-evenement.component';
import { NouveauEvenementComponent } from './nouveau-evenement/nouveau-evenement.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    NouveauEvenementComponent,
    PageEvenementComponent,
    DetailEvenementComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class EvenementModule { }
