import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailSessionComponent } from './detail-session/detail-session.component';
import { NouvelleSessionComponent } from './nouvelle-session/nouvelle-session.component';
import { PageSessionComponent } from './page-session/page-session.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    PageSessionComponent,
    NouvelleSessionComponent,
    DetailSessionComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class SessionModule { }
