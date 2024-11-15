import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailNoteComponent } from './detail-note/detail-note.component';
import { NouvelleNoteComponent } from './nouvelle-note/nouvelle-note.component';
import { PageNoteComponent } from './page-note/page-note.component';
import { MaterialModule } from '../../material/material.module';
import { BoutonActionModule } from '../../composants/bouton-action/bouton-action.module';



@NgModule({
  declarations: [
    PageNoteComponent,
    NouvelleNoteComponent,
    DetailNoteComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoutonActionModule
  ]
})
export class NoteModule { }
