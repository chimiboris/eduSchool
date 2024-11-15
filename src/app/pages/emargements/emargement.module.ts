import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouveauEmargementComponent } from './nouveau-emargement/nouveau-emargement.component';
import { PageEmargementComponent } from './page-emargement/page-emargement.component';
import { DetailEmargementComponent } from './detail-emargement/detail-emargement.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    DetailEmargementComponent,
    PageEmargementComponent,
    NouveauEmargementComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class EmargementModule { }
