import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(private router: Router){

  }

  private lastSelectedMenu: Menu | undefined;

  navigate(menu: Menu):  void {
    if(this.lastSelectedMenu){
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate(['/dashboard', menu.url]); // Utilisez le service Router pour naviguer vers l'URL spécifiée
  }

  public menuProperties: Array<Menu> = [
    
    {
    id: '1',
    titre:'Dashboard',
    icon:'fa-solid fa-chart-line',
    url:'dashboard',
    sousMenu: [
      {
        id:'11', 
        titre:'Vue d\'ensemble',
        icon:'fa-solid fa-chart-pie',
        url:''
      },
      {
        id:'12', 
        titre:'Statistiques',
        icon:'fa-solid fa-chart-column',
        url:'statistiques'
      }
    ]
    },
    {
      id:'2', 
      titre:'Personnes',
      icon:'fa-solid fa-user-tie',
      url:'',
      sousMenu: [
        {
          id:'21', 
          titre:'administration',
          icon:'fa-solid fa-user-tie',
          url:'personnels',
        },
        {
          id:'22', 
          titre:'Enseignants',
          icon:'fa-solid fa-person-chalkboard',
          url:'enseignants',
        },
        {
          id:'23', 
          titre:'Élèves',
          icon:'fa-solid fa-graduation-cap',
          url:'eleves',
        },
        {
          id:'24', 
          titre:'Parents',
          icon:'fa-solid fa-person',
          url:'parents',
        },
      ]
    },
    {
      id:'5', 
      titre:'Cours',
      icon:'fa-solid fa-book',
      url:'',
      sousMenu: [
        {
          id:'51', 
          titre:'Cours',
          icon:'fa-solid fa-book',
          url:'cours',
        },
        {
          id:'52', 
          titre:'Département',
          icon:'fa-solid fa-braille',
          url:'departements',
        },
        {
          id:'53', 
          titre:'Matière',
          icon:'fa-solid fa-book-open',
          url:'matieres',
        },
        {
          id:'54', 
          titre:'Modules',
          icon:'fa-solid fa-book-open',
          url:'modules',
        },
        {
          id:'55', 
          titre:'Chapitre',
          icon:'fa-solid fa-book-open',
          url:'chapitres',
        },
        {
          id:'56', 
          titre:'Leçon',
          icon:'fa-solid fa-book-open',
          url:'leçons',
        },
      ]
    },
    {
      id:'6', 
      titre:'Notes',
      icon:'fa-solid fa-star',
      url:'',
      sousMenu: [
        {
          id:'61', 
          titre:'Notes',
          icon:'fa-solid fa-star',
          url:'notes',
        },
      ]
    },
    {
      id:'7', 
      titre:'Niveau',
      icon:'fa-solid fa-bars',
      url:'',
      sousMenu: [
        {
          id:'71', 
          titre:'Niveau',
          icon:'fa-solid fa-bars',
          url:'niveaux',
        },
        {
          id:'72', 
          titre:'Cycle',
          icon:'fa-solid fa-recycle',
          url:'cycles',
        },
        {
          id:'73', 
          titre:'Spécialité',
          icon:'fa-solid fa-code-branch',
          url:'specialites',
        },
        {
          id:'74', 
          titre:'Salles de classe',
          icon:'fa-solid fa-house',
          url:'salle-de-classe',
        },
      ]
    },
    {
      id:'8', 
      titre:'Calendrier',
      icon:'fa-solid fa-calendar-days',
      url:'',
      sousMenu: [
        {
          id:'81', 
          titre:'Emploi de temps',
          icon:'fa-solid fa-clock',
          url:'emplois-de-temps',
        },
        {
          id:'82', 
          titre:'Sessions',
          icon:'fa-solid fa-spell-check',
          url:'sessions',
        },
        {
          id:'83', 
          titre:'Évènement',
          icon:'fa-solid fa-calendar-days',
          url:'evenements',
        },
        {
          id:'84', 
          titre:'Émargement',
          icon:'fa-solid fa-signature',
          url:'emargements',
        },
      ]
    },
    {
      id:'9', 
      titre:'Scolarité',
      icon:'fa-solid fa-bullseye',
      url:'',
      sousMenu: [
        {
          id:'91', 
          titre:'Scolarité',
          icon:'fa-solid fa-bullseye',
          url:'scolarites',
        },
      ]
    },
    {
      id:'10', 
      titre:'Plan disciplinaire',
      icon:'fa-solid fa-xmark',
      url:'',
      sousMenu: [
        {
          id:'101', 
          titre:'Plan disciplinaire',
          icon:'fa-solid fa-xmark',
          url:'observation',
        },
      ]
    },
    {
      id:'11', 
      titre:'Paramétrage',
      icon:'fa-solid fa-gears',
      url:'',
      sousMenu: [
        {
          id:'111', 
          titre:'Catégories',
          icon:'fa-solid fa-screwdriver-wrench',
          url:'',
        },
        {
          id:'112', 
          titre:'Utilisateurs',
          icon:'fa-solid fa-users-gear',
          url:'',
        }
      ]
    }
    ]

}
    
