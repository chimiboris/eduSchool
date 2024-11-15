import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailEnseignantComponent } from './detail-enseignant/detail-enseignant.component';
import { EnseignantFormComponent } from './enseignant-form/enseignant-form.component';
import { PageEnseignantComponent } from './page-enseignant/page-enseignant.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';
import { SearchEnseignantComponent } from './search-enseignant/search-enseignant.component';
import { EnseignantDetailAllComponent } from './enseignant-detail-all/enseignant-detail-all.component';
import { EditEnseignantComponent } from './edit-enseignant/edit-enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    EnseignantFormComponent,
    PageEnseignantComponent,
    DetailEnseignantComponent,
    SearchEnseignantComponent,
    EnseignantDetailAllComponent,
    EditEnseignantComponent,
    AddEnseignantComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MaterialModule,
    MatPaginatorModule,
    BoutonActionModule
  ]
})
export class EnseignantModule { }
