import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { MaterialModule } from './material/material.module';
import { CommonModule, JsonPipe } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PageProfilComponent } from './composants/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './composants/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageNotFoundComponent } from './composants/page-not-found/page-not-found.component';
import { ChapitreModule } from './pages/chapitres/chapitre.module';
import { CoursModule } from './pages/cours/cours.module';
import { CycleModule } from './pages/cycles/cycle.module';
import { DepartementModule } from './pages/departements/departement.module';
import { EleveModule } from './pages/eleves/eleve.module';
import { EnseignantModule } from './pages/enseignants/enseignant.module';
import { EvenementModule } from './pages/evenements/evenement.module';
import { LeconModule } from './pages/lecons/lecon.module';
import { MatiereModule } from './pages/matiere/matiere.module';
import { ModulesModule } from './pages/modules/modules.module';
import { NiveauModule } from './pages/niveaux/niveau.module';
import { NoteModule } from './pages/notes/note.module';
import { ObservationModule } from './pages/observation/observation.module';
import { ParentModule } from './pages/parents/parent.module';
import { PersonnelModule } from './pages/personnels/personnel.module';
import { SalleDeClasseModule } from './pages/salle-de-classes/salle-de-classe.module';
import { ScolariteModule } from './pages/scolarites/scolarite.module';
import { SessionModule } from './pages/sessions/session.module';
import { SpecialiteModule } from './pages/specialites/specialite.module';
import { BoutonActionModule } from './composants/bouton-action/bouton-action.module';
import { EmploiDeTempsModule } from './pages/emploi-de-temps/emploi-de-temps.module';
import { EmargementModule } from './pages/emargements/emargement.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorIntl } from './pages/eleves/CustomPaginatorIntl';





@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    MaterialModule,
    BoutonActionModule,
    AppRoutingModule,
    CommonModule,
    ChapitreModule,
    CoursModule,
    CycleModule,
    DepartementModule,
    EleveModule,
    EmargementModule,
    EmploiDeTempsModule,
    EnseignantModule,
    EvenementModule,
    LeconModule,
    MatiereModule,
    ModulesModule,
    NiveauModule,
    NoteModule,
    ObservationModule,
    ParentModule,
    PersonnelModule,
    SalleDeClasseModule,
    ScolariteModule,
    SessionModule,
    SpecialiteModule,
    
    
  ],
  exports:[
    
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl },
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
