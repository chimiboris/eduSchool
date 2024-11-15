import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageScolariteComponent } from './page-scolarite/page-scolarite.component';
import { NouvelleScolariteComponent } from './nouvelle-scolarite/nouvelle-scolarite.component';
import { DetailScolariteComponent } from './detail-scolarite/detail-scolarite.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    DetailScolariteComponent,
    NouvelleScolariteComponent,
    PageScolariteComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class ScolariteModule { }
