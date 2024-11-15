import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouvelleSalleDeClasseComponent } from './nouvelle-salle-de-classe/nouvelle-salle-de-classe.component';
import { PageSalleDeClasseComponent } from './page-salle-de-classe/page-salle-de-classe.component';
import { DetailSalleDeClasseComponent } from './detail-salle-de-classe/detail-salle-de-classe.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    DetailSalleDeClasseComponent,
    PageSalleDeClasseComponent,
    NouvelleSalleDeClasseComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class SalleDeClasseModule { }
