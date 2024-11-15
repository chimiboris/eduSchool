import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { BouttonActionComponent } from '../boutton-action/boutton-action.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    BouttonActionComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    JsonPipe,
    
  ],
  exports: [
    BouttonActionComponent,
    PaginationComponent
  ]
})
export class BoutonActionModule { }
