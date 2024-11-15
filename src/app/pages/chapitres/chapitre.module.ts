import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageChapitreComponent } from './page-chapitre/page-chapitre.component';
import { NouveauChapitreComponent } from './nouveau-chapitre/nouveau-chapitre.component';
import { DetailChapitreComponent } from './detail-chapitre/detail-chapitre.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    PageChapitreComponent,
    NouveauChapitreComponent,
    DetailChapitreComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,BoutonActionModule
  ]
})
export class ChapitreModule { }
