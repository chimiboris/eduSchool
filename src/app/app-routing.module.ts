import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageEleveComponent } from './pages/eleves/page-eleve/page-eleve.component';
import { EleveFormComponent } from './pages/eleves/eleve-form/eleve-form.component';
import { PagePersonnelComponent } from './pages/personnels/page-personnel/page-personnel.component';
import { NouveauPersonnelComponent } from './pages/personnels/nouveau-personnel/nouveau-personnel.component';
import { PageEnseignantComponent } from './pages/enseignants/page-enseignant/page-enseignant.component';
import { EnseignantFormComponent } from './pages/enseignants/enseignant-form/enseignant-form.component';
import { PageParentComponent } from './pages/parents/page-parent/page-parent.component';
import { NouveauParentComponent } from './pages/parents/nouveau-parent/nouveau-parent.component';
import { PageCoursComponent } from './pages/cours/page-cours/page-cours.component';
import { NouveauCoursComponent } from './pages/cours/nouveau-cours/nouveau-cours.component';
import { PageDepartementComponent } from './pages/departements/page-departement/page-departement.component';
import { NouveauDepartementComponent } from './pages/departements/nouveau-departement/nouveau-departement.component';
import { PageMatiereComponent } from './pages/matiere/page-matiere/page-matiere.component';
import { NouvelleMatiereComponent } from './pages/matiere/nouvelle-matiere/nouvelle-matiere.component';
import { NouveauChapitreComponent } from './pages/chapitres/nouveau-chapitre/nouveau-chapitre.component';
import { PageChapitreComponent } from './pages/chapitres/page-chapitre/page-chapitre.component';
import { PageModuleComponent } from './pages/modules/page-module/page-module.component';
import { NouveauModuleComponent } from './pages/modules/nouveau-module/nouveau-module.component';
import { PageLeconComponent } from './pages/lecons/page-lecon/page-lecon.component';
import { NouvelleLeconComponent } from './pages/lecons/nouvelle-lecon/nouvelle-lecon.component';
import { PageEmploiDeTempsComponent } from './pages/emploi-de-temps/page-emploi-de-temps/page-emploi-de-temps.component';
import { NouveauEmploiDeTempsComponent } from './pages/emploi-de-temps/nouveau-emploi-de-temps/nouveau-emploi-de-temps.component';
import { PageNoteComponent } from './pages/notes/page-note/page-note.component';
import { NouvelleNoteComponent } from './pages/notes/nouvelle-note/nouvelle-note.component';
import { PageNiveauComponent } from './pages/niveaux/page-niveau/page-niveau.component';
import { NouveauNiveauComponent } from './pages/niveaux/nouveau-niveau/nouveau-niveau.component';
import { PageCycleComponent } from './pages/cycles/page-cycle/page-cycle.component';
import { NouveauCycleComponent } from './pages/cycles/nouveau-cycle/nouveau-cycle.component';
import { PageSpecialiteComponent } from './pages/specialites/page-specialite/page-specialite.component';
import { NouvelleSpecialiteComponent } from './pages/specialites/nouvelle-specialite/nouvelle-specialite.component';
import { PageSalleDeClasseComponent } from './pages/salle-de-classes/page-salle-de-classe/page-salle-de-classe.component';
import { NouvelleSalleDeClasseComponent } from './pages/salle-de-classes/nouvelle-salle-de-classe/nouvelle-salle-de-classe.component';
import { PageSessionComponent } from './pages/sessions/page-session/page-session.component';
import { NouvelleSessionComponent } from './pages/sessions/nouvelle-session/nouvelle-session.component';
import { PageEvenementComponent } from './pages/evenements/page-evenement/page-evenement.component';
import { NouveauEvenementComponent } from './pages/evenements/nouveau-evenement/nouveau-evenement.component';
import { PageEmargementComponent } from './pages/emargements/page-emargement/page-emargement.component';
import { NouveauEmargementComponent } from './pages/emargements/nouveau-emargement/nouveau-emargement.component';
import { PageScolariteComponent } from './pages/scolarites/page-scolarite/page-scolarite.component';
import { NouvelleScolariteComponent } from './pages/scolarites/nouvelle-scolarite/nouvelle-scolarite.component';
import { PageProfilComponent } from './composants/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './composants/changer-mot-de-passe/changer-mot-de-passe.component';
import { ApplicationGuardGuard } from './services/guard/application-guard.guard';
import { PageNotFoundComponent } from './composants/page-not-found/page-not-found.component';
import { NouvelleObservationComponent } from './pages/observation/nouvelle-observation/nouvelle-observation.component';
import { PageObservationComponent } from './pages/observation/page-observation/page-observation.component';
import { EleveDetailsAllComponent } from './pages/eleves/eleve-details-all/eleve-details-all.component';
import { EditEleveComponent } from './pages/eleves/edit-eleve/edit-eleve.component';
import { AddEleveComponent } from './pages/eleves/add-eleve/add-eleve.component';
import { EnseignantDetailAllComponent } from './pages/enseignants/enseignant-detail-all/enseignant-detail-all.component';
import { EditEnseignantComponent } from './pages/enseignants/edit-enseignant/edit-enseignant.component';
import { ParentFormComponent } from './pages/parents/parent-form/parent-form.component';
import { EditParentComponent } from './pages/parents/edit-parent/edit-parent.component';
import { AddEnseignantComponent } from './pages/enseignants/add-enseignant/add-enseignant.component';
import { ParentDetailAllComponent } from './pages/parents/parent-detail-all/parent-detail-all.component';
import { PersonnelDetailAllComponent } from './pages/personnels/personnel-detail-all/personnel-detail-all.component';

const routes: Routes = [

  //{ path: 'login', component: PageLoginComponent, title: 'Page de connexion' },
  { path:'inscrire', component: PageInscriptionComponent },
  { path: 'dashboard', component: PageDashboardComponent,
  //canActivate: [ApplicationGuardGuard], 
  children:[
      {
        path: 'statistiques', 
        component: PageStatistiquesComponent
      },
      {
        path: 'eleves', 
        component: PageEleveComponent
      },
      {
        path: 'eleveform', 
        component: EleveFormComponent
      },
      {
        path: 'addeleve', 
        component: AddEleveComponent
      },
      {
        path: 'edit/eleve/:id', 
        component: EditEleveComponent
      },
      {
        path: 'elevedetailall/:id', 
        component: EleveDetailsAllComponent
      },
      {
        path: 'personnels', 
        component: PagePersonnelComponent
      },
      {
        path: 'nouveaupersonnel', 
        component: NouveauPersonnelComponent
      },
      {
        path: 'personneldetailall/:id',
        component: PersonnelDetailAllComponent
      },
      {
        path: 'enseignants', 
        component: PageEnseignantComponent
      },
      {
        path: 'enseignantform', 
        component: EnseignantFormComponent
      },
      {
        path: 'addenseignant', 
        component: AddEnseignantComponent
      },
      {
        path: 'edit/enseignant/:id', 
        component: EditEnseignantComponent
      },
      {
        path: 'enseignantdetailall/:id', 
        component: EnseignantDetailAllComponent
      },
      {
        path: 'parents', 
        component: PageParentComponent
      },
      {
        path: 'parentForm',
        component: ParentFormComponent
      },
      {
        path: 'nouveauparent', 
        component: NouveauParentComponent
      },
      {
        path: 'edit/parent/:id',
        component: EditParentComponent
      },
      {
        path: 'parentdetailall/:id',
        component: ParentDetailAllComponent
      },
      {
        path: 'cours', 
        component: PageCoursComponent
      },
      {
        path: 'nouveaucours', 
        component: NouveauCoursComponent
      },
      {
        path: 'departements', 
        component: PageDepartementComponent
      },
      {
        path: 'nouveaudepartement', 
        component: NouveauDepartementComponent
      },
      {
        path: 'matieres', 
        component: PageMatiereComponent
      },
      {
        path: 'nouvellematiere', 
        component: NouvelleMatiereComponent
      },
      {
        path: 'modules', 
        component: PageModuleComponent
      },
      {
        path: 'nouveaumodule', 
        component: NouveauModuleComponent
      },
      {
        path: 'chapitres', 
        component: PageChapitreComponent
      },
      {
        path: 'nouveauchapitre', 
        component: NouveauChapitreComponent
      },
      {
        path: 'leçons', 
        component: PageLeconComponent
      },
      {
        path: 'nouvelleleçon', 
        component: NouvelleLeconComponent
      },
      {
        path: 'emplois-de-temps', 
        component: PageEmploiDeTempsComponent
      },
      {
        path: 'nouveauemploidetemps', 
        component: NouveauEmploiDeTempsComponent
      },
      {
        path: 'notes', 
        component: PageNoteComponent
      },
      {
        path: 'nouvellenote', 
        component: NouvelleNoteComponent
      },
      {
        path: 'niveaux', 
        component: PageNiveauComponent
      },
      {
        path: 'nouveauniveau', 
        component: NouveauNiveauComponent
      },
      {
        path: 'cycles', 
        component: PageCycleComponent
      },
      {
        path: 'nouveaucycle', 
        component: NouveauCycleComponent
      },
      {
        path: 'specialites', 
        component: PageSpecialiteComponent
      },
      {
        path: 'nouvellespecialite', 
        component: NouvelleSpecialiteComponent
      },
      {
        path: 'salle-de-classe', 
        component: PageSalleDeClasseComponent
      },
      {
        path: 'nouvellesalledeclasse', 
        component: NouvelleSalleDeClasseComponent
      },
      {
        path: 'sessions', 
        component: PageSessionComponent
      },
      {
        path: 'nouvellesession', 
        component: NouvelleSessionComponent
      },
      {
        path: 'evenements', 
        component: PageEvenementComponent
      },
      {
        path: 'nouveauevenement', 
        component: NouveauEvenementComponent
      },
      {
        path: 'emargements', 
        component: PageEmargementComponent
      },
      {
        path: 'nouveauemargement', 
        component: NouveauEmargementComponent
      },
      {
        path: 'scolarites', 
        component: PageScolariteComponent
      },
      {
        path: 'nouvellescolarite', 
        component: NouvelleScolariteComponent
      },
      {
        path: 'observation', 
        component: PageObservationComponent
      },
      {
        path: 'nouvelleobservation', 
        component: NouvelleObservationComponent
      },
      {
        path: 'profil', 
        component: PageProfilComponent
      },
      {
        path: 'changermotdepasse', 
        component: ChangerMotDePasseComponent
      },
    ] 
  },
  
  { 
    path:'', redirectTo:'/dashboard', pathMatch: 'full', 
  },
  { path:'**', 
        component: PageNotFoundComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
