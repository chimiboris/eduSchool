import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailLeconComponent } from './detail-lecon/detail-lecon.component';
import { NouvelleLeconComponent } from './nouvelle-lecon/nouvelle-lecon.component';
import { PageLeconComponent } from './page-lecon/page-lecon.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    DetailLeconComponent,
    NouvelleLeconComponent,
    PageLeconComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,BoutonActionModule
  ]
})
export class LeconModule { }
