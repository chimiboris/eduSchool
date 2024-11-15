import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModuleComponent } from './page-module/page-module.component';
import { NouveauModuleComponent } from './nouveau-module/nouveau-module.component';
import { DetailModuleComponent } from './detail-module/detail-module.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    DetailModuleComponent,
    PageModuleComponent,
    NouveauModuleComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class ModulesModule { }
