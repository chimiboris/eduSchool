import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailDepartementComponent } from './detail-departement/detail-departement.component';
import { NouveauDepartementComponent } from './nouveau-departement/nouveau-departement.component';
import { PageDepartementComponent } from './page-departement/page-departement.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    PageDepartementComponent,
    DetailDepartementComponent,
    NouveauDepartementComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class DepartementModule { }
