import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailEmploiDeTempsComponent } from './detail-emploi-de-temps/detail-emploi-de-temps.component';
import { PageEmploiDeTempsComponent } from './page-emploi-de-temps/page-emploi-de-temps.component';
import { NouveauEmploiDeTempsComponent } from './nouveau-emploi-de-temps/nouveau-emploi-de-temps.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    NouveauEmploiDeTempsComponent,
    PageEmploiDeTempsComponent,
    DetailEmploiDeTempsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class EmploiDeTempsModule { }
