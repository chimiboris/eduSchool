import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EleveDetailsAllComponent } from './eleve-details-all/eleve-details-all.component';
import { DetailEleveComponent } from './detail-eleve/detail-eleve.component';
import { EleveFormComponent } from './eleve-form/eleve-form.component';
import { PageEleveComponent } from './page-eleve/page-eleve.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';
import { EditEleveComponent } from './edit-eleve/edit-eleve.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEleveComponent } from './add-eleve/add-eleve.component';
import { SearchEleveComponent } from './search-eleve/search-eleve.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    EleveFormComponent,
    PageEleveComponent,
    DetailEleveComponent,
    EleveDetailsAllComponent,
    EditEleveComponent,
    AddEleveComponent,
    SearchEleveComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MaterialModule,
    BoutonActionModule,
  ]
})
export class EleveModule { }
