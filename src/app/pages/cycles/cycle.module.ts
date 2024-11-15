import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCycleComponent } from './detail-cycle/detail-cycle.component';
import { NouveauCycleComponent } from './nouveau-cycle/nouveau-cycle.component';
import { PageCycleComponent } from './page-cycle/page-cycle.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    DetailCycleComponent,
    PageCycleComponent,
    NouveauCycleComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class CycleModule { }
