import { Eleve } from "./eleve";

export const ELEVES: Eleve[] = [
    {
      id: 1,
      matricule: "MAT001",
      nom: "Doe",
      prenom: "John",
      email: "john.doe@example.com",
      dateNaissance: new Date(2001, 5, 15),
      lieuNaissance: "Paris",
      niveau: "Terminale",
      specialite: "Scientifique",
      adresse: "123 Rue de la République",
      sexe: "Masculin",
      classe: "TS1",
      picture: "assets/homme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Général",
      cycle: "Second cycle",
      telephone: "0123456789",
      ville: "Paris",
      nationalite: "Française",
      nomDuPere: "Doe Père",
      nomDeLaMere: "Doe Mère",
      scolarites: [
        { 
            id: 1, 
            datePaiement: "2023-05-15", 
            nomEleve: "Dupont", 
            prenomEleve: "Jean", 
            niveau: "Licence 1", 
            etat: true, 
            classe: "L1A", 
            montantPaye: "1500", 
            resteAPayer: "500" 
        },
      ],
      enseignants: [
        { id: 2,
          nom: "Landry",
          prenom: "Antoine",
          adresseEmail: "landry@gmail.com",
          departement: "Département 3",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 9, 12),
          lieuNaissance: "Paris",
          telephone: "0123456786",
          adresse: "6 Rue du Commerce",
          matiere1: "Mathématiques",
          matiere2: "Informatique",
          matiere3: "Sciences",
          matiere4: "Géographie",
          matiere5: "Histoire",
          emploiDeTemps: []},
        { id: 2,
          nom: "Boris",
          prenom: "Antoine",
          adresseEmail: "boris@gmail.com",
          departement: "Département 3",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 9, 12),
          lieuNaissance: "Paris",
          telephone: "0123456786",
          adresse: "6 Rue du Commerce",
          matiere1: "Mathématiques",
          matiere2: "Informatique",
          matiere3: "Sciences",
          matiere4: "Géographie",
          matiere5: "Histoire",
          emploiDeTemps: [] }
      ],
      matieres: [
        {   id: 1, 
          nomDeLaMatiere: "Informatique", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en informatique", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 1, 
        nomDeLaMatiere: "WEB Development", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en informatique", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    },
    {   id: 1, 
      nomDeLaMatiere: "Base de données", 
      niveauEnseignement: "Licence", 
      nbreCredit: 6, 
      description: "Cours de base en informatique", 
      listeDeModule: [
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
      ] 
  },
      ],
      notes: [
        { id: 12,
          nomEleve: "Nami",
          prenomEleve: "Marie",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 10",
          sequence: "Sequence 10",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        { id: 13,
          nomEleve: "Nami",
          prenomEleve: "Marie",
          matiere: "Français",
          valeur: 15,
          classe: "Classe 10",
          sequence: "Sequence 10",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) }
      ],
    },
    {
      id: 2,
      matricule: "MAT002",
      nom: "Smith",
      prenom: "Jane",
      email: "jane.smith@example.com",
      dateNaissance: new Date(2002, 3, 22),
      lieuNaissance: "Lyon",
      niveau: "Première",
      specialite: "Littéraire",
      adresse: "456 Avenue des Champs",
      sexe: "Féminin",
      classe: "PL1",
      picture: "assets/femme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Général",
      cycle: "Premier cycle",
      telephone: "0987654321",
      ville: "Lyon",
      nationalite: "Française",
      nomDuPere: "Smith Père",
      nomDeLaMere: "Smith Mère",
      scolarites: [
        { 
            id: 2, 
            datePaiement: "2023-05-16", 
            nomEleve: "Martin", 
            prenomEleve: "Marie", 
            niveau: "Licence 2", 
            etat: true, 
            classe: "L2B", 
            montantPaye: "2000", 
            resteAPayer: "0" 
        },
      ],
      enseignants: [
        { id: 2,
          nom: "Landry",
          prenom: "Antoine",
          adresseEmail: "antoine@gmail.com",
          departement: "Département 3",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 9, 12),
          lieuNaissance: "Paris",
          telephone: "0123456786",
          adresse: "6 Rue du Commerce",
          matiere1: "Mathématiques",
          matiere2: "Informatique",
          matiere3: "Sciences",
          matiere4: "Géographie",
          matiere5: "Histoire",
          emploiDeTemps: [] },
        { id: 2,
          nom: "Landry",
          prenom: "Antoine",
          adresseEmail: "landry@gmail.com",
          departement: "Département 3",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 9, 12),
          lieuNaissance: "Paris",
          telephone: "0123456786",
          adresse: "6 Rue du Commerce",
          matiere1: "Mathématiques",
          matiere2: "Informatique",
          matiere3: "Sciences",
          matiere4: "Géographie",
          matiere5: "Histoire",
          emploiDeTemps: [] }
      ],
      matieres: [
        {   id: 1, 
          nomDeLaMatiere: "Informatique", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en informatique", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 1, 
        nomDeLaMatiere: "Informatique", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en informatique", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    },
    {   id: 1, 
      nomDeLaMatiere: "Informatique", 
      niveauEnseignement: "Licence", 
      nbreCredit: 6, 
      description: "Cours de base en informatique", 
      listeDeModule: [
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
      ] 
  },
      ],
      notes: [
        { id: 11,
          nomEleve: "Tientcheu",
          prenomEleve: "Evans",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 9",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        { id: 11,
          nomEleve: "Tientcheu",
          prenomEleve: "Evans",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 9",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) }
      ]
    },
    {
      id: 3,
      matricule: "MAT003",
      nom: "Brown",
      prenom: "Michael",
      email: "michael.brown@example.com",
      dateNaissance: new Date(2003, 8, 10),
      lieuNaissance: "Marseille",
      niveau: "Seconde",
      specialite: "Technologique",
      adresse: "789 Boulevard de la Liberté",
      sexe: "Masculin",
      classe: "TSTMG",
      picture: "assets/homme.png",
      section: "Anglophone",
      typeEnseignement: "Technique",
      natureEnseignement: "Commercial",
      cycle: "Second cycle",
      telephone: "0234567891",
      ville: "Marseille",
      nationalite: "Française",
      nomDuPere: "Brown Père",
      nomDeLaMere: "Brown Mère",
      scolarites: [
        { 
            id: 3, 
            datePaiement: "2023-05-17", 
            nomEleve: "Bernard", 
            prenomEleve: "Paul", 
            niveau: "Licence 3", 
            etat: false, 
            classe: "L3C", 
            montantPaye: "1000", 
            resteAPayer: "1000" 
        },
      ],
      enseignants: [
        { id: 2,
          nom: "Landry",
          prenom: "Antoine",
          adresseEmail: "landry@gmail.com",
          departement: "Département 3",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 9, 12),
          lieuNaissance: "Paris",
          telephone: "0123456786",
          adresse: "6 Rue du Commerce",
          matiere1: "Mathématiques",
          matiere2: "Informatique",
          matiere3: "Sciences",
          matiere4: "Géographie",
          matiere5: "Histoire",
          emploiDeTemps: [] },
        { id: 2,
          nom: "Landry",
          prenom: "Antoine",
          adresseEmail: "landry@gmail.com",
          departement: "Département 3",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 9, 12),
          lieuNaissance: "Paris",
          telephone: "0123456786",
          adresse: "6 Rue du Commerce",
          matiere1: "Mathématiques",
          matiere2: "Informatique",
          matiere3: "Sciences",
          matiere4: "Géographie",
          matiere5: "Histoire",
          emploiDeTemps: []}
      ],
      matieres: [
        {   id: 2, 
          nomDeLaMatiere: "Mathématiques", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en mathématiques", 
          listeDeModule: [
              {   id: 4, 
                  nomDuModule: "IA", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres:[
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              }
          ] 
      },
      {   id: 2, 
        nomDeLaMatiere: "Mathématiques", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en mathématiques", 
        listeDeModule: [
            {   id: 4, 
                nomDuModule: "IA", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres:[
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            }
        ] 
    },
    {   id: 2, 
      nomDeLaMatiere: "Mathématiques", 
      niveauEnseignement: "Licence", 
      nbreCredit: 6, 
      description: "Cours de base en mathématiques", 
      listeDeModule: [
          {   id: 4, 
              nomDuModule: "IA", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres:[
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          }
      ] 
  },
      ],
      notes: [
        { id: 11,
          nomEleve: "Tientcheu",
          prenomEleve: "Evans",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 9",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        { id: 11,
          nomEleve: "Tientcheu",
          prenomEleve: "Evans",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 9",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) }
      ]
    },
    {
      id: 4,
      matricule: "MAT004",
      nom: "Davis",
      prenom: "Emily",
      email: "emily.davis@example.com",
      dateNaissance: new Date(2004, 11, 5),
      lieuNaissance: "Toulouse",
      niveau: "Terminale",
      specialite: "Scientifique",
      adresse: "101 Rue de l'Église",
      sexe: "Féminin",
      classe: "TS2",
      picture: "assets/femme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Commercial",
      cycle: "Second cycle",
      telephone: "0321456789",
      ville: "Toulouse",
      nationalite: "Française",
      nomDuPere: "Davis Père",
      nomDeLaMere: "Davis Mère",
      scolarites: [
        { 
            id: 4, 
            datePaiement: "2023-05-18", 
            nomEleve: "Robert", 
            prenomEleve: "Julie", 
            niveau: "Master 1", 
            etat: true, 
            classe: "M1A", 
            montantPaye: "3000", 
            resteAPayer: "0" 
        },
      ],
      enseignants: [
        {  id: 10,
          nom: "Mayanne",
          prenom: "Claire",
          adresseEmail: "mayanne@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "13 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: [] },
        {  id: 10,
          nom: "Mayanne",
          prenom: "Claire",
          adresseEmail: "claire@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "13 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: [] }
      ],
      matieres: [
        {   id: 3, 
          nomDeLaMatiere: "Physique", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en physique", 
          listeDeModule: [
              {   id: 1, 
                  nomDuModule: "Programmation", 
                  nomMatiere: "Informatique", 
                  description: "Les bases de la logique algorithmique", 
                  listeDesChapitres: [
                      {   id: 1, 
                          titreChapitre: "Bases de la programmation", 
                          nomDuModule: "Programmation", 
                          description: "Introduction aux concepts fondamentaux de la programmation", 
                          listeDesLecons: [
                              {   id: 1, 
                                  titreLecon: "Introduction à l'algorithmique", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Les bases de la logique algorithmique" 
                              },
                              {   id: 2, 
                                  titreLecon: "Structures de données", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Introduction aux structures de données" 
                              },
                              {   id: 3, 
                                  titreLecon: "Les boucles", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Comprendre et utiliser les boucles" 
                              },
                  
                          ]
                              
                      },
          
                      {   id: 2, 
                          titreChapitre: "Programmation avancée", 
                          nomDuModule: "Programmation", 
                          description: "Concepts avancés en programmation", 
                          listeDesLecons: [
                              {   id: 4, 
                                  titreLecon: "Fonctions", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Définir et utiliser des fonctions" 
                              },
                              {   id: 5, 
                                  titreLecon: "Récursivité", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Concept de récursivité en programmation" 
                              },
                          ] 
                      },
                  ] 
              },
              {   id: 1, 
                  nomDuModule: "Programmation", 
                  nomMatiere: "Informatique", 
                  description: "Les bases de la logique algorithmique", 
                  listeDesChapitres: [
                      {   id: 1, 
                          titreChapitre: "Bases de la programmation", 
                          nomDuModule: "Programmation", 
                          description: "Introduction aux concepts fondamentaux de la programmation", 
                          listeDesLecons: [
                              {   id: 1, 
                                  titreLecon: "Introduction à l'algorithmique", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Les bases de la logique algorithmique" 
                              },
                              {   id: 2, 
                                  titreLecon: "Structures de données", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Introduction aux structures de données" 
                              },
                              {   id: 3, 
                                  titreLecon: "Les boucles", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Comprendre et utiliser les boucles" 
                              },
                  
                          ]
                              
                      },
          
                      {   id: 2, 
                          titreChapitre: "Programmation avancée", 
                          nomDuModule: "Programmation", 
                          description: "Concepts avancés en programmation", 
                          listeDesLecons: [
                              {   id: 4, 
                                  titreLecon: "Fonctions", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Définir et utiliser des fonctions" 
                              },
                              {   id: 5, 
                                  titreLecon: "Récursivité", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Concept de récursivité en programmation" 
                              },
                          ] 
                      },
                  ] 
              },
          ] 
      },
      {   id: 3, 
        nomDeLaMatiere: "Physique", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en physique", 
        listeDeModule: [
            {   id: 1, 
                nomDuModule: "Programmation", 
                nomMatiere: "Informatique", 
                description: "Les bases de la logique algorithmique", 
                listeDesChapitres: [
                    {   id: 1, 
                        titreChapitre: "Bases de la programmation", 
                        nomDuModule: "Programmation", 
                        description: "Introduction aux concepts fondamentaux de la programmation", 
                        listeDesLecons: [
                            {   id: 1, 
                                titreLecon: "Introduction à l'algorithmique", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Les bases de la logique algorithmique" 
                            },
                            {   id: 2, 
                                titreLecon: "Structures de données", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Introduction aux structures de données" 
                            },
                            {   id: 3, 
                                titreLecon: "Les boucles", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Comprendre et utiliser les boucles" 
                            },
                
                        ]
                            
                    },
        
                    {   id: 2, 
                        titreChapitre: "Programmation avancée", 
                        nomDuModule: "Programmation", 
                        description: "Concepts avancés en programmation", 
                        listeDesLecons: [
                            {   id: 4, 
                                titreLecon: "Fonctions", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Définir et utiliser des fonctions" 
                            },
                            {   id: 5, 
                                titreLecon: "Récursivité", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Concept de récursivité en programmation" 
                            },
                        ] 
                    },
                ] 
            },
            {   id: 1, 
                nomDuModule: "Programmation", 
                nomMatiere: "Informatique", 
                description: "Les bases de la logique algorithmique", 
                listeDesChapitres: [
                    {   id: 1, 
                        titreChapitre: "Bases de la programmation", 
                        nomDuModule: "Programmation", 
                        description: "Introduction aux concepts fondamentaux de la programmation", 
                        listeDesLecons: [
                            {   id: 1, 
                                titreLecon: "Introduction à l'algorithmique", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Les bases de la logique algorithmique" 
                            },
                            {   id: 2, 
                                titreLecon: "Structures de données", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Introduction aux structures de données" 
                            },
                            {   id: 3, 
                                titreLecon: "Les boucles", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Comprendre et utiliser les boucles" 
                            },
                
                        ]
                            
                    },
        
                    {   id: 2, 
                        titreChapitre: "Programmation avancée", 
                        nomDuModule: "Programmation", 
                        description: "Concepts avancés en programmation", 
                        listeDesLecons: [
                            {   id: 4, 
                                titreLecon: "Fonctions", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Définir et utiliser des fonctions" 
                            },
                            {   id: 5, 
                                titreLecon: "Récursivité", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Concept de récursivité en programmation" 
                            },
                        ] 
                    },
                ] 
            },
        ] 
    },
    {   id: 3, 
      nomDeLaMatiere: "Physique", 
      niveauEnseignement: "Licence", 
      nbreCredit: 6, 
      description: "Cours de base en physique", 
      listeDeModule: [
          {   id: 1, 
              nomDuModule: "Programmation", 
              nomMatiere: "Informatique", 
              description: "Les bases de la logique algorithmique", 
              listeDesChapitres: [
                  {   id: 1, 
                      titreChapitre: "Bases de la programmation", 
                      nomDuModule: "Programmation", 
                      description: "Introduction aux concepts fondamentaux de la programmation", 
                      listeDesLecons: [
                          {   id: 1, 
                              titreLecon: "Introduction à l'algorithmique", 
                              nomDuChapitre: "Bases de la programmation", 
                              description: "Les bases de la logique algorithmique" 
                          },
                          {   id: 2, 
                              titreLecon: "Structures de données", 
                              nomDuChapitre: "Bases de la programmation", 
                              description: "Introduction aux structures de données" 
                          },
                          {   id: 3, 
                              titreLecon: "Les boucles", 
                              nomDuChapitre: "Bases de la programmation", 
                              description: "Comprendre et utiliser les boucles" 
                          },
              
                      ]
                          
                  },
      
                  {   id: 2, 
                      titreChapitre: "Programmation avancée", 
                      nomDuModule: "Programmation", 
                      description: "Concepts avancés en programmation", 
                      listeDesLecons: [
                          {   id: 4, 
                              titreLecon: "Fonctions", 
                              nomDuChapitre: "Programmation avancée", 
                              description: "Définir et utiliser des fonctions" 
                          },
                          {   id: 5, 
                              titreLecon: "Récursivité", 
                              nomDuChapitre: "Programmation avancée", 
                              description: "Concept de récursivité en programmation" 
                          },
                      ] 
                  },
              ] 
          },
          {   id: 1, 
              nomDuModule: "Programmation", 
              nomMatiere: "Informatique", 
              description: "Les bases de la logique algorithmique", 
              listeDesChapitres: [
                  {   id: 1, 
                      titreChapitre: "Bases de la programmation", 
                      nomDuModule: "Programmation", 
                      description: "Introduction aux concepts fondamentaux de la programmation", 
                      listeDesLecons: [
                          {   id: 1, 
                              titreLecon: "Introduction à l'algorithmique", 
                              nomDuChapitre: "Bases de la programmation", 
                              description: "Les bases de la logique algorithmique" 
                          },
                          {   id: 2, 
                              titreLecon: "Structures de données", 
                              nomDuChapitre: "Bases de la programmation", 
                              description: "Introduction aux structures de données" 
                          },
                          {   id: 3, 
                              titreLecon: "Les boucles", 
                              nomDuChapitre: "Bases de la programmation", 
                              description: "Comprendre et utiliser les boucles" 
                          },
              
                      ]
                          
                  },
      
                  {   id: 2, 
                      titreChapitre: "Programmation avancée", 
                      nomDuModule: "Programmation", 
                      description: "Concepts avancés en programmation", 
                      listeDesLecons: [
                          {   id: 4, 
                              titreLecon: "Fonctions", 
                              nomDuChapitre: "Programmation avancée", 
                              description: "Définir et utiliser des fonctions" 
                          },
                          {   id: 5, 
                              titreLecon: "Récursivité", 
                              nomDuChapitre: "Programmation avancée", 
                              description: "Concept de récursivité en programmation" 
                          },
                      ] 
                  },
              ] 
          },
      ] 
  },
      ],
      notes: [
        { id: 11,
          nomEleve: "Tientcheu",
          prenomEleve: "Evans",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 9",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        { id: 11,
          nomEleve: "Tientcheu",
          prenomEleve: "Evans",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 9",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18)}
      ]
    },
    {
      id: 5,
      matricule: "MAT005",
      nom: "Wilson",
      prenom: "David",
      email: "david.wilson@example.com",
      dateNaissance: new Date(2001, 7, 20),
      lieuNaissance: "Nice",
      niveau: "Première",
      specialite: "Littéraire",
      adresse: "202 Avenue Jean Médecin",
      sexe: "Masculin",
      classe: "PL2",
      picture: "assets/homme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Commercial",
      cycle: "Premier cycle",
      telephone: "0412345678",
      ville: "Nice",
      nationalite: "Française",
      nomDuPere: "Wilson Père",
      nomDeLaMere: "Wilson Mère",
      scolarites: [
        { 
            id: 5, 
            datePaiement: "2023-05-19", 
            nomEleve: "Petit", 
            prenomEleve: "Luc", 
            niveau: "Master 2", 
            etat: false, 
            classe: "M2B", 
            montantPaye: "2500", 
            resteAPayer: "500" 
        },
      ],
      enseignants: [
        {  id: 10,
          nom: "Mayanne",
          prenom: "Claire",
          adresseEmail: "mayanne@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "13 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: [] },
        {  id: 10,
          nom: "Mayanne",
          prenom: "Claire",
          adresseEmail: "mayanne@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "13 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: [] }
      ],
      matieres: [
        {   id: 3, 
          nomDeLaMatiere: "Physique", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en physique", 
          listeDeModule: [
              {   id: 1, 
                  nomDuModule: "Programmation", 
                  nomMatiere: "Informatique", 
                  description: "Les bases de la logique algorithmique", 
                  listeDesChapitres: [
                      {   id: 1, 
                          titreChapitre: "Bases de la programmation", 
                          nomDuModule: "Programmation", 
                          description: "Introduction aux concepts fondamentaux de la programmation", 
                          listeDesLecons: [
                              {   id: 1, 
                                  titreLecon: "Introduction à l'algorithmique", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Les bases de la logique algorithmique" 
                              },
                              {   id: 2, 
                                  titreLecon: "Structures de données", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Introduction aux structures de données" 
                              },
                              {   id: 3, 
                                  titreLecon: "Les boucles", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Comprendre et utiliser les boucles" 
                              },
                  
                          ]
                              
                      },
          
                      {   id: 2, 
                          titreChapitre: "Programmation avancée", 
                          nomDuModule: "Programmation", 
                          description: "Concepts avancés en programmation", 
                          listeDesLecons: [
                              {   id: 4, 
                                  titreLecon: "Fonctions", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Définir et utiliser des fonctions" 
                              },
                              {   id: 5, 
                                  titreLecon: "Récursivité", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Concept de récursivité en programmation" 
                              },
                          ] 
                      },
                  ] 
              },
              {   id: 1, 
                  nomDuModule: "Programmation", 
                  nomMatiere: "Informatique", 
                  description: "Les bases de la logique algorithmique", 
                  listeDesChapitres: [
                      {   id: 1, 
                          titreChapitre: "Bases de la programmation", 
                          nomDuModule: "Programmation", 
                          description: "Introduction aux concepts fondamentaux de la programmation", 
                          listeDesLecons: [
                              {   id: 1, 
                                  titreLecon: "Introduction à l'algorithmique", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Les bases de la logique algorithmique" 
                              },
                              {   id: 2, 
                                  titreLecon: "Structures de données", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Introduction aux structures de données" 
                              },
                              {   id: 3, 
                                  titreLecon: "Les boucles", 
                                  nomDuChapitre: "Bases de la programmation", 
                                  description: "Comprendre et utiliser les boucles" 
                              },
                  
                          ]
                              
                      },
          
                      {   id: 2, 
                          titreChapitre: "Programmation avancée", 
                          nomDuModule: "Programmation", 
                          description: "Concepts avancés en programmation", 
                          listeDesLecons: [
                              {   id: 4, 
                                  titreLecon: "Fonctions", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Définir et utiliser des fonctions" 
                              },
                              {   id: 5, 
                                  titreLecon: "Récursivité", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Concept de récursivité en programmation" 
                              },
                          ] 
                      },
                  ] 
              },
          ] 
      },
      {   id: 3, 
        nomDeLaMatiere: "Physique", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en physique", 
        listeDeModule: [
            {   id: 1, 
                nomDuModule: "Programmation", 
                nomMatiere: "Informatique", 
                description: "Les bases de la logique algorithmique", 
                listeDesChapitres: [
                    {   id: 1, 
                        titreChapitre: "Bases de la programmation", 
                        nomDuModule: "Programmation", 
                        description: "Introduction aux concepts fondamentaux de la programmation", 
                        listeDesLecons: [
                            {   id: 1, 
                                titreLecon: "Introduction à l'algorithmique", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Les bases de la logique algorithmique" 
                            },
                            {   id: 2, 
                                titreLecon: "Structures de données", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Introduction aux structures de données" 
                            },
                            {   id: 3, 
                                titreLecon: "Les boucles", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Comprendre et utiliser les boucles" 
                            },
                
                        ]
                            
                    },
        
                    {   id: 2, 
                        titreChapitre: "Programmation avancée", 
                        nomDuModule: "Programmation", 
                        description: "Concepts avancés en programmation", 
                        listeDesLecons: [
                            {   id: 4, 
                                titreLecon: "Fonctions", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Définir et utiliser des fonctions" 
                            },
                            {   id: 5, 
                                titreLecon: "Récursivité", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Concept de récursivité en programmation" 
                            },
                        ] 
                    },
                ] 
            },
            {   id: 1, 
                nomDuModule: "Programmation", 
                nomMatiere: "Informatique", 
                description: "Les bases de la logique algorithmique", 
                listeDesChapitres: [
                    {   id: 1, 
                        titreChapitre: "Bases de la programmation", 
                        nomDuModule: "Programmation", 
                        description: "Introduction aux concepts fondamentaux de la programmation", 
                        listeDesLecons: [
                            {   id: 1, 
                                titreLecon: "Introduction à l'algorithmique", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Les bases de la logique algorithmique" 
                            },
                            {   id: 2, 
                                titreLecon: "Structures de données", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Introduction aux structures de données" 
                            },
                            {   id: 3, 
                                titreLecon: "Les boucles", 
                                nomDuChapitre: "Bases de la programmation", 
                                description: "Comprendre et utiliser les boucles" 
                            },
                
                        ]
                            
                    },
        
                    {   id: 2, 
                        titreChapitre: "Programmation avancée", 
                        nomDuModule: "Programmation", 
                        description: "Concepts avancés en programmation", 
                        listeDesLecons: [
                            {   id: 4, 
                                titreLecon: "Fonctions", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Définir et utiliser des fonctions" 
                            },
                            {   id: 5, 
                                titreLecon: "Récursivité", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Concept de récursivité en programmation" 
                            },
                        ] 
                    },
                ] 
            },
        ] 
    },
      ],
      notes: [
        { id: 10,
          nomEleve: "Marie",
          prenomEleve: "Leroy",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 8",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        { id: 10,
          nomEleve: "Marie",
          prenomEleve: "Leroy",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 8",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) }
      ]
    },
    // Ajoutez 15 autres instances similaires pour obtenir un total de 20
    {
      id: 6,
      matricule: "MAT006",
      nom: "Taylor",
      prenom: "Sarah",
      email: "sarah.taylor@example.com",
      dateNaissance: new Date(2002, 4, 25),
      lieuNaissance: "Bordeaux",
      niveau: "Seconde",
      specialite: "Scientifique",
      adresse: "303 Rue Sainte-Catherine",
      sexe: "Femme",
      classe: "TS3",
      picture: "assets/femme.png",
      section: "Anglophone",
      typeEnseignement: "Général",
      natureEnseignement: "Commercial",
      cycle: "Second cycle",
      telephone: "0512345678",
      ville: "Bordeaux",
      nationalite: "Française",
      nomDuPere: "Taylor Père",
      nomDeLaMere: "Taylor Mère",
      scolarites: [
        { 
            id: 6, 
            datePaiement: "2023-05-20", 
            nomEleve: "Durand", 
            prenomEleve: "Emma", 
            niveau: "Doctorat", 
            etat: true, 
            classe: "D1A", 
            montantPaye: "4000", 
            resteAPayer: "0" 
        },
      ],
      enseignants: [
        {  id: 10,
          nom: "Mayanne",
          prenom: "Claire",
          adresseEmail: "mayanne@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Femme",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "13 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: [] },
        {  id: 10,
          nom: "Mayanne",
          prenom: "Claire",
          adresseEmail: "claire@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Femme",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "13 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: []}
      ],
      matieres: [
        {   id: 4, 
          nomDeLaMatiere: "Chimie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en chimie", 
          listeDeModule: [
              {   id: 2, 
                  nomDuModule: "Web", 
                  nomMatiere: "Informatique", 
                  description: "Les bases de la logique algorithmique", 
                  listeDesChapitres: [
                      {   id: 3, 
                          titreChapitre: "Développement web", 
                          nomDuModule: "Web", 
                          description: "Les bases du développement web", 
                          listeDesLecons: [
                              {   id: 6, 
                                  titreLecon: "Les pointeurs", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Comprendre les pointeurs" 
                              },
                              {   id: 7, 
                                  titreLecon: "Introduction au HTML", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du HTML" 
                              },
                              {   id: 8, 
                                  titreLecon: "Introduction au CSS", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du CSS" 
                              },
                          ] 
                      },
          
                      {   id: 4, 
                          titreChapitre: "Informatique générale", 
                          nomDuModule: "Informatique", 
                          description: "Concepts généraux en informatique", 
                          listeDesLecons: [
                              {   id: 9, 
                                  titreLecon: "JavaScript pour les débutants", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du JavaScript" 
                              },
                              {   id: 10, 
                                  titreLecon: "Systèmes d'exploitation", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux systèmes d'exploitation" 
                              },
                              {   id: 11, 
                                  titreLecon: "Réseaux informatiques", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Les bases des réseaux informatiques" 
                              },
                          ] 
                      },
                  ] 
              },
              {   id: 2, 
                  nomDuModule: "Web", 
                  nomMatiere: "Informatique", 
                  description: "Les bases de la logique algorithmique", 
                  listeDesChapitres: [
                      {   id: 3, 
                          titreChapitre: "Développement web", 
                          nomDuModule: "Web", 
                          description: "Les bases du développement web", 
                          listeDesLecons: [
                              {   id: 6, 
                                  titreLecon: "Les pointeurs", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Comprendre les pointeurs" 
                              },
                              {   id: 7, 
                                  titreLecon: "Introduction au HTML", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du HTML" 
                              },
                              {   id: 8, 
                                  titreLecon: "Introduction au CSS", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du CSS" 
                              },
                          ] 
                      },
          
                      {   id: 4, 
                          titreChapitre: "Informatique générale", 
                          nomDuModule: "Informatique", 
                          description: "Concepts généraux en informatique", 
                          listeDesLecons: [
                              {   id: 9, 
                                  titreLecon: "JavaScript pour les débutants", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du JavaScript" 
                              },
                              {   id: 10, 
                                  titreLecon: "Systèmes d'exploitation", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux systèmes d'exploitation" 
                              },
                              {   id: 11, 
                                  titreLecon: "Réseaux informatiques", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Les bases des réseaux informatiques" 
                              },
                          ] 
                      },
                  ] 
              },
              {   id: 2, 
                  nomDuModule: "Web", 
                  nomMatiere: "Informatique", 
                  description: "Les bases de la logique algorithmique", 
                  listeDesChapitres: [
                      {   id: 3, 
                          titreChapitre: "Développement web", 
                          nomDuModule: "Web", 
                          description: "Les bases du développement web", 
                          listeDesLecons: [
                              {   id: 6, 
                                  titreLecon: "Les pointeurs", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Comprendre les pointeurs" 
                              },
                              {   id: 7, 
                                  titreLecon: "Introduction au HTML", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du HTML" 
                              },
                              {   id: 8, 
                                  titreLecon: "Introduction au CSS", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du CSS" 
                              },
                          ] 
                      },
          
                      {   id: 4, 
                          titreChapitre: "Informatique générale", 
                          nomDuModule: "Informatique", 
                          description: "Concepts généraux en informatique", 
                          listeDesLecons: [
                              {   id: 9, 
                                  titreLecon: "JavaScript pour les débutants", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du JavaScript" 
                              },
                              {   id: 10, 
                                  titreLecon: "Systèmes d'exploitation", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux systèmes d'exploitation" 
                              },
                              {   id: 11, 
                                  titreLecon: "Réseaux informatiques", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Les bases des réseaux informatiques" 
                              },
                          ] 
                      },
                  ] 
              },
          ] 
      },
      {   id: 4, 
        nomDeLaMatiere: "Chimie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en chimie", 
        listeDeModule: [
            {   id: 2, 
                nomDuModule: "Web", 
                nomMatiere: "Informatique", 
                description: "Les bases de la logique algorithmique", 
                listeDesChapitres: [
                    {   id: 3, 
                        titreChapitre: "Développement web", 
                        nomDuModule: "Web", 
                        description: "Les bases du développement web", 
                        listeDesLecons: [
                            {   id: 6, 
                                titreLecon: "Les pointeurs", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Comprendre les pointeurs" 
                            },
                            {   id: 7, 
                                titreLecon: "Introduction au HTML", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du HTML" 
                            },
                            {   id: 8, 
                                titreLecon: "Introduction au CSS", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du CSS" 
                            },
                        ] 
                    },
        
                    {   id: 4, 
                        titreChapitre: "Informatique générale", 
                        nomDuModule: "Informatique", 
                        description: "Concepts généraux en informatique", 
                        listeDesLecons: [
                            {   id: 9, 
                                titreLecon: "JavaScript pour les débutants", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du JavaScript" 
                            },
                            {   id: 10, 
                                titreLecon: "Systèmes d'exploitation", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux systèmes d'exploitation" 
                            },
                            {   id: 11, 
                                titreLecon: "Réseaux informatiques", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Les bases des réseaux informatiques" 
                            },
                        ] 
                    },
                ] 
            },
            {   id: 2, 
                nomDuModule: "Web", 
                nomMatiere: "Informatique", 
                description: "Les bases de la logique algorithmique", 
                listeDesChapitres: [
                    {   id: 3, 
                        titreChapitre: "Développement web", 
                        nomDuModule: "Web", 
                        description: "Les bases du développement web", 
                        listeDesLecons: [
                            {   id: 6, 
                                titreLecon: "Les pointeurs", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Comprendre les pointeurs" 
                            },
                            {   id: 7, 
                                titreLecon: "Introduction au HTML", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du HTML" 
                            },
                            {   id: 8, 
                                titreLecon: "Introduction au CSS", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du CSS" 
                            },
                        ] 
                    },
        
                    {   id: 4, 
                        titreChapitre: "Informatique générale", 
                        nomDuModule: "Informatique", 
                        description: "Concepts généraux en informatique", 
                        listeDesLecons: [
                            {   id: 9, 
                                titreLecon: "JavaScript pour les débutants", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du JavaScript" 
                            },
                            {   id: 10, 
                                titreLecon: "Systèmes d'exploitation", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux systèmes d'exploitation" 
                            },
                            {   id: 11, 
                                titreLecon: "Réseaux informatiques", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Les bases des réseaux informatiques" 
                            },
                        ] 
                    },
                ] 
            },
            {   id: 2, 
                nomDuModule: "Web", 
                nomMatiere: "Informatique", 
                description: "Les bases de la logique algorithmique", 
                listeDesChapitres: [
                    {   id: 3, 
                        titreChapitre: "Développement web", 
                        nomDuModule: "Web", 
                        description: "Les bases du développement web", 
                        listeDesLecons: [
                            {   id: 6, 
                                titreLecon: "Les pointeurs", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Comprendre les pointeurs" 
                            },
                            {   id: 7, 
                                titreLecon: "Introduction au HTML", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du HTML" 
                            },
                            {   id: 8, 
                                titreLecon: "Introduction au CSS", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du CSS" 
                            },
                        ] 
                    },
        
                    {   id: 4, 
                        titreChapitre: "Informatique générale", 
                        nomDuModule: "Informatique", 
                        description: "Concepts généraux en informatique", 
                        listeDesLecons: [
                            {   id: 9, 
                                titreLecon: "JavaScript pour les débutants", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du JavaScript" 
                            },
                            {   id: 10, 
                                titreLecon: "Systèmes d'exploitation", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux systèmes d'exploitation" 
                            },
                            {   id: 11, 
                                titreLecon: "Réseaux informatiques", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Les bases des réseaux informatiques" 
                            },
                        ] 
                    },
                ] 
            },
        ] 
    },
    {   id: 4, 
      nomDeLaMatiere: "Chimie", 
      niveauEnseignement: "Licence", 
      nbreCredit: 6, 
      description: "Cours de base en chimie", 
      listeDeModule: [
          {   id: 2, 
              nomDuModule: "Web", 
              nomMatiere: "Informatique", 
              description: "Les bases de la logique algorithmique", 
              listeDesChapitres: [
                  {   id: 3, 
                      titreChapitre: "Développement web", 
                      nomDuModule: "Web", 
                      description: "Les bases du développement web", 
                      listeDesLecons: [
                          {   id: 6, 
                              titreLecon: "Les pointeurs", 
                              nomDuChapitre: "Programmation avancée", 
                              description: "Comprendre les pointeurs" 
                          },
                          {   id: 7, 
                              titreLecon: "Introduction au HTML", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du HTML" 
                          },
                          {   id: 8, 
                              titreLecon: "Introduction au CSS", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du CSS" 
                          },
                      ] 
                  },
      
                  {   id: 4, 
                      titreChapitre: "Informatique générale", 
                      nomDuModule: "Informatique", 
                      description: "Concepts généraux en informatique", 
                      listeDesLecons: [
                          {   id: 9, 
                              titreLecon: "JavaScript pour les débutants", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du JavaScript" 
                          },
                          {   id: 10, 
                              titreLecon: "Systèmes d'exploitation", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux systèmes d'exploitation" 
                          },
                          {   id: 11, 
                              titreLecon: "Réseaux informatiques", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Les bases des réseaux informatiques" 
                          },
                      ] 
                  },
              ] 
          },
          {   id: 2, 
              nomDuModule: "Web", 
              nomMatiere: "Informatique", 
              description: "Les bases de la logique algorithmique", 
              listeDesChapitres: [
                  {   id: 3, 
                      titreChapitre: "Développement web", 
                      nomDuModule: "Web", 
                      description: "Les bases du développement web", 
                      listeDesLecons: [
                          {   id: 6, 
                              titreLecon: "Les pointeurs", 
                              nomDuChapitre: "Programmation avancée", 
                              description: "Comprendre les pointeurs" 
                          },
                          {   id: 7, 
                              titreLecon: "Introduction au HTML", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du HTML" 
                          },
                          {   id: 8, 
                              titreLecon: "Introduction au CSS", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du CSS" 
                          },
                      ] 
                  },
      
                  {   id: 4, 
                      titreChapitre: "Informatique générale", 
                      nomDuModule: "Informatique", 
                      description: "Concepts généraux en informatique", 
                      listeDesLecons: [
                          {   id: 9, 
                              titreLecon: "JavaScript pour les débutants", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du JavaScript" 
                          },
                          {   id: 10, 
                              titreLecon: "Systèmes d'exploitation", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux systèmes d'exploitation" 
                          },
                          {   id: 11, 
                              titreLecon: "Réseaux informatiques", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Les bases des réseaux informatiques" 
                          },
                      ] 
                  },
              ] 
          },
          {   id: 2, 
              nomDuModule: "Web", 
              nomMatiere: "Informatique", 
              description: "Les bases de la logique algorithmique", 
              listeDesChapitres: [
                  {   id: 3, 
                      titreChapitre: "Développement web", 
                      nomDuModule: "Web", 
                      description: "Les bases du développement web", 
                      listeDesLecons: [
                          {   id: 6, 
                              titreLecon: "Les pointeurs", 
                              nomDuChapitre: "Programmation avancée", 
                              description: "Comprendre les pointeurs" 
                          },
                          {   id: 7, 
                              titreLecon: "Introduction au HTML", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du HTML" 
                          },
                          {   id: 8, 
                              titreLecon: "Introduction au CSS", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du CSS" 
                          },
                      ] 
                  },
      
                  {   id: 4, 
                      titreChapitre: "Informatique générale", 
                      nomDuModule: "Informatique", 
                      description: "Concepts généraux en informatique", 
                      listeDesLecons: [
                          {   id: 9, 
                              titreLecon: "JavaScript pour les débutants", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du JavaScript" 
                          },
                          {   id: 10, 
                              titreLecon: "Systèmes d'exploitation", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux systèmes d'exploitation" 
                          },
                          {   id: 11, 
                              titreLecon: "Réseaux informatiques", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Les bases des réseaux informatiques" 
                          },
                      ] 
                  },
              ] 
          },
      ] 
  },
      ],
      notes: [
        { id: 10,
          nomEleve: "Marie",
          prenomEleve: "Leroy",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 8",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18)},
        { id: 10,
          nomEleve: "Marie",
          prenomEleve: "Leroy",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 8",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18)}
      ]
    },
    {
      id: 7,
      matricule: "MAT007",
      nom: "Thomas",
      prenom: "Chris",
      email: "chris.thomas@example.com",
      dateNaissance: new Date(2003, 6, 30),
      lieuNaissance: "Lille",
      niveau: "Terminale",
      specialite: "Technologique",
      adresse: "404 Rue Nationale",
      sexe: "Masculin",
      classe: "TSTI2D",
      picture: "assets/homme.png",
      section: "Francophone",
      typeEnseignement: "Technique",
      natureEnseignement: "Industriel",
      cycle: "Second cycle",
      telephone: "0612345678",
      ville: "Lille",
      nationalite: "Française",
      nomDuPere: "Thomas Père",
      nomDeLaMere: "Thomas Mère",
      scolarites: [
        { 
            id: 7, 
            datePaiement: "2023-05-21", 
            nomEleve: "Lefevre", 
            prenomEleve: "Tom", 
            niveau: "Licence 1", 
            etat: true, 
            classe: "L1B", 
            montantPaye: "1500", 
            resteAPayer: "500" 
        },
    
      ],
      enseignants: [
        {  id: 10,
          nom: "Mayanne",
          prenom: "Claire",
          adresseEmail: "claire@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "13 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: [] },
        {  id: 10,
          nom: "Mayanne",
          prenom: "Claire",
          adresseEmail: "claire@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "13 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: []}
      ],
      matieres: [
        {   id: 4, 
          nomDeLaMatiere: "Chimie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en chimie", 
          listeDeModule: [
              {   id: 2, 
                  nomDuModule: "Web", 
                  nomMatiere: "Informatique", 
                  description: "Les bases de la logique algorithmique", 
                  listeDesChapitres: [
                      {   id: 3, 
                          titreChapitre: "Développement web", 
                          nomDuModule: "Web", 
                          description: "Les bases du développement web", 
                          listeDesLecons: [
                              {   id: 6, 
                                  titreLecon: "Les pointeurs", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Comprendre les pointeurs" 
                              },
                              {   id: 7, 
                                  titreLecon: "Introduction au HTML", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du HTML" 
                              },
                              {   id: 8, 
                                  titreLecon: "Introduction au CSS", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du CSS" 
                              },
                          ] 
                      },
          
                      {   id: 4, 
                          titreChapitre: "Informatique générale", 
                          nomDuModule: "Informatique", 
                          description: "Concepts généraux en informatique", 
                          listeDesLecons: [
                              {   id: 9, 
                                  titreLecon: "JavaScript pour les débutants", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du JavaScript" 
                              },
                              {   id: 10, 
                                  titreLecon: "Systèmes d'exploitation", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux systèmes d'exploitation" 
                              },
                              {   id: 11, 
                                  titreLecon: "Réseaux informatiques", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Les bases des réseaux informatiques" 
                              },
                          ] 
                      },
                  ] 
              },
              {   id: 2, 
                  nomDuModule: "Web", 
                  nomMatiere: "Informatique", 
                  description: "Les bases de la logique algorithmique", 
                  listeDesChapitres: [
                      {   id: 3, 
                          titreChapitre: "Développement web", 
                          nomDuModule: "Web", 
                          description: "Les bases du développement web", 
                          listeDesLecons: [
                              {   id: 6, 
                                  titreLecon: "Les pointeurs", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Comprendre les pointeurs" 
                              },
                              {   id: 7, 
                                  titreLecon: "Introduction au HTML", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du HTML" 
                              },
                              {   id: 8, 
                                  titreLecon: "Introduction au CSS", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du CSS" 
                              },
                          ] 
                      },
          
                      {   id: 4, 
                          titreChapitre: "Informatique générale", 
                          nomDuModule: "Informatique", 
                          description: "Concepts généraux en informatique", 
                          listeDesLecons: [
                              {   id: 9, 
                                  titreLecon: "JavaScript pour les débutants", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du JavaScript" 
                              },
                              {   id: 10, 
                                  titreLecon: "Systèmes d'exploitation", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux systèmes d'exploitation" 
                              },
                              {   id: 11, 
                                  titreLecon: "Réseaux informatiques", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Les bases des réseaux informatiques" 
                              },
                          ] 
                      },
                  ] 
              },
              {   id: 2, 
                  nomDuModule: "Web", 
                  nomMatiere: "Informatique", 
                  description: "Les bases de la logique algorithmique", 
                  listeDesChapitres: [
                      {   id: 3, 
                          titreChapitre: "Développement web", 
                          nomDuModule: "Web", 
                          description: "Les bases du développement web", 
                          listeDesLecons: [
                              {   id: 6, 
                                  titreLecon: "Les pointeurs", 
                                  nomDuChapitre: "Programmation avancée", 
                                  description: "Comprendre les pointeurs" 
                              },
                              {   id: 7, 
                                  titreLecon: "Introduction au HTML", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du HTML" 
                              },
                              {   id: 8, 
                                  titreLecon: "Introduction au CSS", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du CSS" 
                              },
                          ] 
                      },
          
                      {   id: 4, 
                          titreChapitre: "Informatique générale", 
                          nomDuModule: "Informatique", 
                          description: "Concepts généraux en informatique", 
                          listeDesLecons: [
                              {   id: 9, 
                                  titreLecon: "JavaScript pour les débutants", 
                                  nomDuChapitre: "Développement web", 
                                  description: "Les bases du JavaScript" 
                              },
                              {   id: 10, 
                                  titreLecon: "Systèmes d'exploitation", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux systèmes d'exploitation" 
                              },
                              {   id: 11, 
                                  titreLecon: "Réseaux informatiques", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Les bases des réseaux informatiques" 
                              },
                          ] 
                      },
                  ] 
              },
          ] 
      },
      {   id: 4, 
        nomDeLaMatiere: "Chimie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en chimie", 
        listeDeModule: [
            {   id: 2, 
                nomDuModule: "Web", 
                nomMatiere: "Informatique", 
                description: "Les bases de la logique algorithmique", 
                listeDesChapitres: [
                    {   id: 3, 
                        titreChapitre: "Développement web", 
                        nomDuModule: "Web", 
                        description: "Les bases du développement web", 
                        listeDesLecons: [
                            {   id: 6, 
                                titreLecon: "Les pointeurs", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Comprendre les pointeurs" 
                            },
                            {   id: 7, 
                                titreLecon: "Introduction au HTML", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du HTML" 
                            },
                            {   id: 8, 
                                titreLecon: "Introduction au CSS", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du CSS" 
                            },
                        ] 
                    },
        
                    {   id: 4, 
                        titreChapitre: "Informatique générale", 
                        nomDuModule: "Informatique", 
                        description: "Concepts généraux en informatique", 
                        listeDesLecons: [
                            {   id: 9, 
                                titreLecon: "JavaScript pour les débutants", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du JavaScript" 
                            },
                            {   id: 10, 
                                titreLecon: "Systèmes d'exploitation", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux systèmes d'exploitation" 
                            },
                            {   id: 11, 
                                titreLecon: "Réseaux informatiques", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Les bases des réseaux informatiques" 
                            },
                        ] 
                    },
                ] 
            },
            {   id: 2, 
                nomDuModule: "Web", 
                nomMatiere: "Informatique", 
                description: "Les bases de la logique algorithmique", 
                listeDesChapitres: [
                    {   id: 3, 
                        titreChapitre: "Développement web", 
                        nomDuModule: "Web", 
                        description: "Les bases du développement web", 
                        listeDesLecons: [
                            {   id: 6, 
                                titreLecon: "Les pointeurs", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Comprendre les pointeurs" 
                            },
                            {   id: 7, 
                                titreLecon: "Introduction au HTML", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du HTML" 
                            },
                            {   id: 8, 
                                titreLecon: "Introduction au CSS", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du CSS" 
                            },
                        ] 
                    },
        
                    {   id: 4, 
                        titreChapitre: "Informatique générale", 
                        nomDuModule: "Informatique", 
                        description: "Concepts généraux en informatique", 
                        listeDesLecons: [
                            {   id: 9, 
                                titreLecon: "JavaScript pour les débutants", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du JavaScript" 
                            },
                            {   id: 10, 
                                titreLecon: "Systèmes d'exploitation", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux systèmes d'exploitation" 
                            },
                            {   id: 11, 
                                titreLecon: "Réseaux informatiques", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Les bases des réseaux informatiques" 
                            },
                        ] 
                    },
                ] 
            },
            {   id: 2, 
                nomDuModule: "Web", 
                nomMatiere: "Informatique", 
                description: "Les bases de la logique algorithmique", 
                listeDesChapitres: [
                    {   id: 3, 
                        titreChapitre: "Développement web", 
                        nomDuModule: "Web", 
                        description: "Les bases du développement web", 
                        listeDesLecons: [
                            {   id: 6, 
                                titreLecon: "Les pointeurs", 
                                nomDuChapitre: "Programmation avancée", 
                                description: "Comprendre les pointeurs" 
                            },
                            {   id: 7, 
                                titreLecon: "Introduction au HTML", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du HTML" 
                            },
                            {   id: 8, 
                                titreLecon: "Introduction au CSS", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du CSS" 
                            },
                        ] 
                    },
        
                    {   id: 4, 
                        titreChapitre: "Informatique générale", 
                        nomDuModule: "Informatique", 
                        description: "Concepts généraux en informatique", 
                        listeDesLecons: [
                            {   id: 9, 
                                titreLecon: "JavaScript pour les débutants", 
                                nomDuChapitre: "Développement web", 
                                description: "Les bases du JavaScript" 
                            },
                            {   id: 10, 
                                titreLecon: "Systèmes d'exploitation", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux systèmes d'exploitation" 
                            },
                            {   id: 11, 
                                titreLecon: "Réseaux informatiques", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Les bases des réseaux informatiques" 
                            },
                        ] 
                    },
                ] 
            },
        ] 
    },
    {   id: 4, 
      nomDeLaMatiere: "Chimie", 
      niveauEnseignement: "Licence", 
      nbreCredit: 6, 
      description: "Cours de base en chimie", 
      listeDeModule: [
          {   id: 2, 
              nomDuModule: "Web", 
              nomMatiere: "Informatique", 
              description: "Les bases de la logique algorithmique", 
              listeDesChapitres: [
                  {   id: 3, 
                      titreChapitre: "Développement web", 
                      nomDuModule: "Web", 
                      description: "Les bases du développement web", 
                      listeDesLecons: [
                          {   id: 6, 
                              titreLecon: "Les pointeurs", 
                              nomDuChapitre: "Programmation avancée", 
                              description: "Comprendre les pointeurs" 
                          },
                          {   id: 7, 
                              titreLecon: "Introduction au HTML", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du HTML" 
                          },
                          {   id: 8, 
                              titreLecon: "Introduction au CSS", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du CSS" 
                          },
                      ] 
                  },
      
                  {   id: 4, 
                      titreChapitre: "Informatique générale", 
                      nomDuModule: "Informatique", 
                      description: "Concepts généraux en informatique", 
                      listeDesLecons: [
                          {   id: 9, 
                              titreLecon: "JavaScript pour les débutants", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du JavaScript" 
                          },
                          {   id: 10, 
                              titreLecon: "Systèmes d'exploitation", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux systèmes d'exploitation" 
                          },
                          {   id: 11, 
                              titreLecon: "Réseaux informatiques", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Les bases des réseaux informatiques" 
                          },
                      ] 
                  },
              ] 
          },
          {   id: 2, 
              nomDuModule: "Web", 
              nomMatiere: "Informatique", 
              description: "Les bases de la logique algorithmique", 
              listeDesChapitres: [
                  {   id: 3, 
                      titreChapitre: "Développement web", 
                      nomDuModule: "Web", 
                      description: "Les bases du développement web", 
                      listeDesLecons: [
                          {   id: 6, 
                              titreLecon: "Les pointeurs", 
                              nomDuChapitre: "Programmation avancée", 
                              description: "Comprendre les pointeurs" 
                          },
                          {   id: 7, 
                              titreLecon: "Introduction au HTML", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du HTML" 
                          },
                          {   id: 8, 
                              titreLecon: "Introduction au CSS", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du CSS" 
                          },
                      ] 
                  },
      
                  {   id: 4, 
                      titreChapitre: "Informatique générale", 
                      nomDuModule: "Informatique", 
                      description: "Concepts généraux en informatique", 
                      listeDesLecons: [
                          {   id: 9, 
                              titreLecon: "JavaScript pour les débutants", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du JavaScript" 
                          },
                          {   id: 10, 
                              titreLecon: "Systèmes d'exploitation", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux systèmes d'exploitation" 
                          },
                          {   id: 11, 
                              titreLecon: "Réseaux informatiques", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Les bases des réseaux informatiques" 
                          },
                      ] 
                  },
              ] 
          },
          {   id: 2, 
              nomDuModule: "Web", 
              nomMatiere: "Informatique", 
              description: "Les bases de la logique algorithmique", 
              listeDesChapitres: [
                  {   id: 3, 
                      titreChapitre: "Développement web", 
                      nomDuModule: "Web", 
                      description: "Les bases du développement web", 
                      listeDesLecons: [
                          {   id: 6, 
                              titreLecon: "Les pointeurs", 
                              nomDuChapitre: "Programmation avancée", 
                              description: "Comprendre les pointeurs" 
                          },
                          {   id: 7, 
                              titreLecon: "Introduction au HTML", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du HTML" 
                          },
                          {   id: 8, 
                              titreLecon: "Introduction au CSS", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du CSS" 
                          },
                      ] 
                  },
      
                  {   id: 4, 
                      titreChapitre: "Informatique générale", 
                      nomDuModule: "Informatique", 
                      description: "Concepts généraux en informatique", 
                      listeDesLecons: [
                          {   id: 9, 
                              titreLecon: "JavaScript pour les débutants", 
                              nomDuChapitre: "Développement web", 
                              description: "Les bases du JavaScript" 
                          },
                          {   id: 10, 
                              titreLecon: "Systèmes d'exploitation", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux systèmes d'exploitation" 
                          },
                          {   id: 11, 
                              titreLecon: "Réseaux informatiques", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Les bases des réseaux informatiques" 
                          },
                      ] 
                  },
              ] 
          },
      ] 
  },
      ],
      notes: [
        {  id: 9,
          nomEleve: "Petit",
          prenomEleve: "Julie",
          matiere: "Français",
          valeur: 17,
          classe: "Classe 5",
          sequence: "Sequence 3",
          enseignant: "Morel",
          observation: "Excellente participation en classe",
          noteGenerale: 18,
          premiereNote: 16,
          derniereNote: 19,
          date: new Date(2024, 2, 28) },
        {  id: 9,
          nomEleve: "Petit",
          prenomEleve: "Julie",
          matiere: "Français",
          valeur: 17,
          classe: "Classe 5",
          sequence: "Sequence 3",
          enseignant: "Morel",
          observation: "Excellente participation en classe",
          noteGenerale: 18,
          premiereNote: 16,
          derniereNote: 19,
          date: new Date(2024, 2, 28) }
      ]
    },
    {
      id: 8,
      matricule: "MAT008",
      nom: "Anderson",
      prenom: "Laura",
      email: "laura.anderson@example.com",
      dateNaissance: new Date(2004, 9, 18),
      lieuNaissance: "Nantes",
      niveau: "Première",
      specialite: "Scientifique",
      adresse: "505 Boulevard des Anglais",
      sexe: "Féminin",
      classe: "PL3",
      picture: "assets/femme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Industriel",
      cycle: "Premier cycle",
      telephone: "0712345678",
      ville: "Nantes",
      nationalite: "Française",
      nomDuPere: "Anderson Père",
      nomDeLaMere: "Anderson Mère",
      scolarites: [
        { 
            id: 8, 
            datePaiement: "2023-05-22", 
            nomEleve: "Moreau", 
            prenomEleve: "Alice", 
            niveau: "Licence 2", 
            etat: false, 
            classe: "L2C", 
            montantPaye: "1000", 
            resteAPayer: "1000" 
        },
      ],
      enseignants: [
        { id: 9,
          nom: "Girard",
          prenom: "Jean",
          adresseEmail: "girard@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "12 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: [],},
        { id: 9,
          nom: "Girard",
          prenom: "Jean",
          adresseEmail: "girard@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "12 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: [],}
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 5, 
        nomDeLaMatiere: "Biologie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en biologie", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    },
    {   id: 5, 
      nomDeLaMatiere: "Biologie", 
      niveauEnseignement: "Licence", 
      nbreCredit: 6, 
      description: "Cours de base en biologie", 
      listeDeModule: [
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
      ] 
  }
      ],
      notes: [
        {  id: 9,
          nomEleve: "Petit",
          prenomEleve: "Julie",
          matiere: "Français",
          valeur: 17,
          classe: "Classe 5",
          sequence: "Sequence 3",
          enseignant: "Morel",
          observation: "Excellente participation en classe",
          noteGenerale: 18,
          premiereNote: 16,
          derniereNote: 19,
          date: new Date(2024, 2, 28)},
        {  id: 9,
          nomEleve: "Petit",
          prenomEleve: "Julie",
          matiere: "Français",
          valeur: 17,
          classe: "Classe 5",
          sequence: "Sequence 3",
          enseignant: "Morel",
          observation: "Excellente participation en classe",
          noteGenerale: 18,
          premiereNote: 16,
          derniereNote: 19,
          date: new Date(2024, 2, 28) }
      ]
    },
    {
      id: 9,
      matricule: "MAT009",
      nom: "Harris",
      prenom: "Robert",
      email: "robert.harris@example.com",
      dateNaissance: new Date(2001, 2, 28),
      lieuNaissance: "Strasbourg",
      niveau: "Seconde",
      specialite: "Littéraire",
      adresse: "606 Rue du Général",
      sexe: "Masculin",
      classe: "SL1",
      picture: "assets/homme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Industriel",
      cycle: "Second cycle",
      telephone: "0812345678",
      ville: "Strasbourg",
      nationalite: "Française",
      nomDuPere: "Harris Père",
      nomDeLaMere: "Harris Mère",
      scolarites: [
        { 
            id: 9, 
            datePaiement: "2023-05-23", 
            nomEleve: "Simon", 
            prenomEleve: "Leo", 
            niveau: "Licence 3", 
            etat: true, 
            classe: "L3A", 
            montantPaye: "2000", 
            resteAPayer: "0" 
        },
      ],
      enseignants: [
        { id: 9,
          nom: "Girard",
          prenom: "Jean",
          adresseEmail: "girard@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "12 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: [], },
        { id: 9,
          nom: "Girard",
          prenom: "Jean",
          adresseEmail: "jean@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "12 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: [], }
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      }
      ],
      notes: [
        { id: 8,
          nomEleve: "Morel",
          prenomEleve: "Thomas",
          matiere: "Mathématiques",
          valeur: 16,
          classe: "Classe 4",
          sequence: "Sequence 2",
          enseignant: "Martin",
          observation: "Très bon travail",
          noteGenerale: 17,
          premiereNote: 15,
          derniereNote: 18,
          date: new Date(2024, 3, 20) },
        { id: 8,
          nomEleve: "Morel",
          prenomEleve: "Thomas",
          matiere: "Mathématiques",
          valeur: 16,
          classe: "Classe 4",
          sequence: "Sequence 2",
          enseignant: "Martin",
          observation: "Très bon travail",
          noteGenerale: 17,
          premiereNote: 15,
          derniereNote: 18,
          date: new Date(2024, 3, 20) }
      ]
    },
    {
      id: 10,
      matricule: "MAT010",
      nom: "Clark",
      prenom: "Alice",
      email: "alice.clark@example.com",
      dateNaissance: new Date(2002, 10, 25),
      lieuNaissance: "Montpellier",
      niveau: "Terminale",
      specialite: "Scientifique",
      adresse: "707 Rue de la Comédie",
      sexe: "Féminin",
      classe: "TS4",
      picture: "assets/femme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Industriel",
      cycle: "Second cycle",
      telephone: "0912345678",
      ville: "Montpellier",
      nationalite: "Française",
      nomDuPere: "Clark Père",
      nomDeLaMere: "Clark Mère",
      scolarites: [
        { 
            id: 10, 
            datePaiement: "2023-05-24", 
            nomEleve: "Michel", 
            prenomEleve: "Nina", 
            niveau: "Master 1", 
            etat: true, 
            classe: "M1B", 
            montantPaye: "3000", 
            resteAPayer: "0" 
        },
      ],
      enseignants: [
        { id: 9,
          nom: "Girard",
          prenom: "Jean",
          adresseEmail: "jean@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "12 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: [], },
        { id: 9,
          nom: "Girard",
          prenom: "Jean",
          adresseEmail: "jean@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "12 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: [], }
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 5, 
        nomDeLaMatiere: "Biologie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en biologie", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    }
      ],
      notes: [
        { id: 8,
          nomEleve: "Morel",
          prenomEleve: "Thomas",
          matiere: "Mathématiques",
          valeur: 16,
          classe: "Classe 4",
          sequence: "Sequence 2",
          enseignant: "Martin",
          observation: "Très bon travail",
          noteGenerale: 17,
          premiereNote: 15,
          derniereNote: 18,
          date: new Date(2024, 3, 20) },
        { id: 8,
          nomEleve: "Morel",
          prenomEleve: "Thomas",
          matiere: "Mathématiques",
          valeur: 16,
          classe: "Classe 4",
          sequence: "Sequence 2",
          enseignant: "Martin",
          observation: "Très bon travail",
          noteGenerale: 17,
          premiereNote: 15,
          derniereNote: 18,
          date: new Date(2024, 3, 20) }
      ]
    },
    {
      id: 11,
      matricule: "MAT011",
      nom: "Martinez",
      prenom: "Sophia",
      email: "sophia.martinez@example.com",
      dateNaissance: new Date(2003, 1, 15),
      lieuNaissance: "Rennes",
      niveau: "Première",
      specialite: "Technologique",
      adresse: "808 Rue de Bretagne",
      sexe: "Féminin",
      classe: "PT1",
      picture: "assets/femme.png",
      section: "Francophone",
      typeEnseignement: "Technique",
      natureEnseignement: "Industriel",
      cycle: "Premier cycle",
      telephone: "0612345679",
      ville: "Rennes",
      nationalite: "Française",
      nomDuPere: "Martinez Père",
      nomDeLaMere: "Martinez Mère",
      scolarites: [
        { 
            id: 11, 
            datePaiement: "2023-05-25", 
            nomEleve: "Lemoine", 
            prenomEleve: "Theo", 
            niveau: "Master 2", 
            etat: false, 
            classe: "M2C", 
            montantPaye: "2500", 
            resteAPayer: "500" 
        },
      ],
      enseignants: [
        { id: 9,
          nom: "Girard",
          prenom: "Jean",
          adresseEmail: "jean@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "12 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: [], },
        { id: 9,
          nom: "Girard",
          prenom: "Jean",
          adresseEmail: "jean@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "12 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: [],}
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 5, 
        nomDeLaMatiere: "Biologie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en biologie", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    },
    {   id: 5, 
      nomDeLaMatiere: "Biologie", 
      niveauEnseignement: "Licence", 
      nbreCredit: 6, 
      description: "Cours de base en biologie", 
      listeDeModule: [
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
      ] 
  }
      ],
      notes: [
        { id: 7,
          nomEleve: "Leroye",
          prenomEleve: "Mariee",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 5",
          sequence: "Sequence 6",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        { id: 7,
          nomEleve: "Leroye",
          prenomEleve: "Mariee",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 5",
          sequence: "Sequence 6",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18)}
      ]
    },
    {
      id: 12,
      matricule: "MAT012",
      nom: "Robinson",
      prenom: "James",
      email: "james.robinson@example.com",
      dateNaissance: new Date(2004, 3, 10),
      lieuNaissance: "Grenoble",
      niveau: "Seconde",
      specialite: "Scientifique",
      adresse: "909 Rue de la Liberté",
      sexe: "Masculin",
      classe: "TS5",
      picture: "assets/homme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Industriel",
      cycle: "Second cycle",
      telephone: "0612345680",
      ville: "Grenoble",
      nationalite: "Française",
      nomDuPere: "Robinson Père",
      nomDeLaMere: "Robinson Mère",
      scolarites: [
        { 
            id: 12, 
            datePaiement: "2023-05-26", 
            nomEleve: "Gauthier", 
            prenomEleve: "Chloe", 
            niveau: "Doctorat", 
            etat: true, 
            classe: "D1B", 
            montantPaye: "4000", 
            resteAPayer: "0" 
        },
      ],
      enseignants: [
        { id: 8,
          nom: "Ayanna",
          prenom: "Claire",
          adresseEmail: "claire@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "11 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: []},
        { id: 8,
          nom: "Ayanna",
          prenom: "Claire",
          adresseEmail: "claire@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "11 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: [] }
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 5, 
        nomDeLaMatiere: "Biologie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en biologie", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    }
      ],
      notes: [
        { id: 7,
          nomEleve: "Leroye",
          prenomEleve: "Mariee",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 5",
          sequence: "Sequence 6",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        { id: 7,
          nomEleve: "Leroye",
          prenomEleve: "Mariee",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 5",
          sequence: "Sequence 6",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18)}
      ]
    },
    {
      id: 13,
      matricule: "MAT013",
      nom: "Walker",
      prenom: "Emma",
      email: "emma.walker@example.com",
      dateNaissance: new Date(2001, 6, 25),
      lieuNaissance: "Tours",
      niveau: "Terminale",
      specialite: "Littéraire",
      adresse: "1010 Rue Nationale",
      sexe: "Féminin",
      classe: "TL1",
      picture: "assets/femme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Commercial",
      cycle: "Second cycle",
      telephone: "0612345681",
      ville: "Tours",
      nationalite: "Française",
      nomDuPere: "Walker Père",
      nomDeLaMere: "Walker Mère",
      scolarites: [
        { 
            id: 13, 
            datePaiement: "2023-05-27", 
            nomEleve: "Perrin", 
            prenomEleve: "Maxime", 
            niveau: "Licence 1", 
            etat: true, 
            classe: "L1C", 
            montantPaye: "1500", 
            resteAPayer: "500" 
        },
      ],
      enseignants: [
        { id: 8,
          nom: "Ayanna",
          prenom: "Claire",
          adresseEmail: "claire@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "11 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: []},
        { id: 8,
          nom: "Ayanna",
          prenom: "Claire",
          adresseEmail: "claire@gmail.com",
          departement: "Département 2",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 3, 18),
          lieuNaissance: "Lyon",
          telephone: "0123456792",
          adresse: "11 Rue de la Paix",
          matiere1: "Français",
          matiere2: "Littérature",
          matiere3: "Philosophie",
          matiere4: "Anglais",
          matiere5: "Espagnol",
          emploiDeTemps: []}
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 5, 
        nomDeLaMatiere: "Biologie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en biologie", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    }
      ],
      notes: [
        {  id: 6,
          nomEleve: "Maroie",
          prenomEleve: "Alain",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 5",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        {  id: 6,
          nomEleve: "Maroie",
          prenomEleve: "Alain",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 5",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) }
      ]
    },
    {
      id: 14,
      matricule: "MAT014",
      nom: "White",
      prenom: "Olivia",
      email: "olivia.white@example.com",
      dateNaissance: new Date(2002, 8, 30),
      lieuNaissance: "Dijon",
      niveau: "Première",
      specialite: "Scientifique",
      adresse: "1111 Rue de la République",
      sexe: "Féminin",
      classe: "PL4",
      picture: "assets/femme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Commercial",
      cycle: "Premier cycle",
      telephone: "0612345682",
      ville: "Dijon",
      nationalite: "Française",
      nomDuPere: "White Père",
      nomDeLaMere: "White Mère",
      scolarites: [
        { 
            id: 14, 
            datePaiement: "2023-05-28", 
            nomEleve: "Roux", 
            prenomEleve: "Manon", 
            niveau: "Licence 2", 
            etat: false, 
            classe: "L2A", 
            montantPaye: "1000", 
            resteAPayer: "1000" 
        },
      ],
      enseignants: [
        { id: 7,
          nom: "Fischer",
          prenom: "Jean",
          adresseEmail: "fisher@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "10 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: [] },
        { id: 7,
          nom: "Fischer",
          prenom: "Jean",
          adresseEmail: "fisher@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "10 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: [] }
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 5, 
        nomDeLaMatiere: "Biologie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en biologie", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    }
      ],
      notes: [
        {  id: 6,
          nomEleve: "Maroie",
          prenomEleve: "Alain",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 5",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        {  id: 6,
          nomEleve: "Maroie",
          prenomEleve: "Alain",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 5",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18)}
      ]
    },
    {
      id: 15,
      matricule: "MAT015",
      nom: "Lopez",
      prenom: "Daniel",
      email: "daniel.lopez@example.com",
      dateNaissance: new Date(2003, 11, 20),
      lieuNaissance: "Nîmes",
      niveau: "Seconde",
      specialite: "Technologique",
      adresse: "1212 Rue de la Liberté",
      sexe: "Masculin",
      classe: "TS6",
      picture: "assets/homme.png",
      section: "Francophone",
      typeEnseignement: "Technique",
      natureEnseignement: "Commercial",
      cycle: "Second cycle",
      telephone: "0612345683",
      ville: "Nîmes",
      nationalite: "Française",
      nomDuPere: "Lopez Père",
      nomDeLaMere: "Lopez Mère",
      scolarites: [
        { 
            id: 15, 
            datePaiement: "2023-05-29", 
            nomEleve: "Girard", 
            prenomEleve: "Lucas", 
            niveau: "Licence 3", 
            etat: true, 
            classe: "L3B", 
            montantPaye: "2000", 
            resteAPayer: "0" 
        },
      ],
      enseignants: [
        { id: 7,
          nom: "Fischer",
          prenom: "Jean",
          adresseEmail: "fisher@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "10 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: []},
        { id: 7,
          nom: "Fischer",
          prenom: "Jean",
          adresseEmail: "fisher@gmail.com",
          departement: "Département 1",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1976, 7, 30),
          lieuNaissance: "Strasbourg",
          telephone: "0123456791",
          adresse: "10 Rue de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique-Chimie",
          matiere3: "SVT",
          matiere4: "Technologie",
          matiere5: "Mathématiques",
          emploiDeTemps: []}
      ],
        matieres: [
          {   id: 5, 
            nomDeLaMatiere: "Biologie", 
            niveauEnseignement: "Licence", 
            nbreCredit: 6, 
            description: "Cours de base en biologie", 
            listeDeModule: [
                {   id: 3, 
                    nomDuModule: "Informatique", 
                    nomMatiere: "Informatique", 
                    description: "Introduction aux structures de données", 
                    listeDesChapitres: [
                        {   id: 5, 
                            titreChapitre: "Intelligence artificielle", 
                            nomDuModule: "IA", 
                            description: "Introduction à l'intelligence artificielle", 
                            listeDesLecons: [
                                {   id: 12, 
                                    titreLecon: "Bases de données", 
                                    nomDuChapitre: "Informatique générale", 
                                    description: "Introduction aux bases de données" 
                                },
                                {   id: 13, 
                                    titreLecon: "Machine learning", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au machine learning" 
                                },
                                {   id: 14, 
                                    titreLecon: "Réseaux de neurones", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Les réseaux de neurones en IA" 
                                },
                                {   id: 15, 
                                    titreLecon: "Traitement du langage naturel", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au traitement du langage naturel" 
                                }
                            ] 
                        },
            
                        {   id: 5, 
                            titreChapitre: "Intelligence artificielle", 
                            nomDuModule: "IA", 
                            description: "Introduction à l'intelligence artificielle", 
                            listeDesLecons: [
                                {   id: 12, 
                                    titreLecon: "Bases de données", 
                                    nomDuChapitre: "Informatique générale", 
                                    description: "Introduction aux bases de données" 
                                },
                                {   id: 13, 
                                    titreLecon: "Machine learning", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au machine learning" 
                                },
                                {   id: 14, 
                                    titreLecon: "Réseaux de neurones", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Les réseaux de neurones en IA" 
                                },
                                {   id: 15, 
                                    titreLecon: "Traitement du langage naturel", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au traitement du langage naturel" 
                                }
                            ] 
                        }
                    ]
                },
                {   id: 3, 
                    nomDuModule: "Informatique", 
                    nomMatiere: "Informatique", 
                    description: "Introduction aux structures de données", 
                    listeDesChapitres: [
                        {   id: 5, 
                            titreChapitre: "Intelligence artificielle", 
                            nomDuModule: "IA", 
                            description: "Introduction à l'intelligence artificielle", 
                            listeDesLecons: [
                                {   id: 12, 
                                    titreLecon: "Bases de données", 
                                    nomDuChapitre: "Informatique générale", 
                                    description: "Introduction aux bases de données" 
                                },
                                {   id: 13, 
                                    titreLecon: "Machine learning", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au machine learning" 
                                },
                                {   id: 14, 
                                    titreLecon: "Réseaux de neurones", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Les réseaux de neurones en IA" 
                                },
                                {   id: 15, 
                                    titreLecon: "Traitement du langage naturel", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au traitement du langage naturel" 
                                }
                            ] 
                        },
            
                        {   id: 5, 
                            titreChapitre: "Intelligence artificielle", 
                            nomDuModule: "IA", 
                            description: "Introduction à l'intelligence artificielle", 
                            listeDesLecons: [
                                {   id: 12, 
                                    titreLecon: "Bases de données", 
                                    nomDuChapitre: "Informatique générale", 
                                    description: "Introduction aux bases de données" 
                                },
                                {   id: 13, 
                                    titreLecon: "Machine learning", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au machine learning" 
                                },
                                {   id: 14, 
                                    titreLecon: "Réseaux de neurones", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Les réseaux de neurones en IA" 
                                },
                                {   id: 15, 
                                    titreLecon: "Traitement du langage naturel", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au traitement du langage naturel" 
                                }
                            ] 
                        }
                    ]
                },
                {   id: 3, 
                    nomDuModule: "Informatique", 
                    nomMatiere: "Informatique", 
                    description: "Introduction aux structures de données", 
                    listeDesChapitres: [
                        {   id: 5, 
                            titreChapitre: "Intelligence artificielle", 
                            nomDuModule: "IA", 
                            description: "Introduction à l'intelligence artificielle", 
                            listeDesLecons: [
                                {   id: 12, 
                                    titreLecon: "Bases de données", 
                                    nomDuChapitre: "Informatique générale", 
                                    description: "Introduction aux bases de données" 
                                },
                                {   id: 13, 
                                    titreLecon: "Machine learning", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au machine learning" 
                                },
                                {   id: 14, 
                                    titreLecon: "Réseaux de neurones", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Les réseaux de neurones en IA" 
                                },
                                {   id: 15, 
                                    titreLecon: "Traitement du langage naturel", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au traitement du langage naturel" 
                                }
                            ] 
                        },
            
                        {   id: 5, 
                            titreChapitre: "Intelligence artificielle", 
                            nomDuModule: "IA", 
                            description: "Introduction à l'intelligence artificielle", 
                            listeDesLecons: [
                                {   id: 12, 
                                    titreLecon: "Bases de données", 
                                    nomDuChapitre: "Informatique générale", 
                                    description: "Introduction aux bases de données" 
                                },
                                {   id: 13, 
                                    titreLecon: "Machine learning", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au machine learning" 
                                },
                                {   id: 14, 
                                    titreLecon: "Réseaux de neurones", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Les réseaux de neurones en IA" 
                                },
                                {   id: 15, 
                                    titreLecon: "Traitement du langage naturel", 
                                    nomDuChapitre: "Intelligence artificielle", 
                                    description: "Introduction au traitement du langage naturel" 
                                }
                            ] 
                        }
                    ]
                },
            ] 
        },
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      }
      ],
      
      notes: [
        { id: 5,
          nomEleve: "Jean",
          prenomEleve: "Dupond",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 4",
          sequence: "Sequence 2",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18)},
        { id: 5,
          nomEleve: "Jean",
          prenomEleve: "Dupond",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 4",
          sequence: "Sequence 2",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) }
      ]
    },
    {
      id: 16,
      matricule: "MAT016",
      nom: "King",
      prenom: "Alexander",
      email: "alexander.king@example.com",
      dateNaissance: new Date(2004, 2, 10),
      lieuNaissance: "Amiens",
      niveau: "Première",
      specialite: "Littéraire",
      adresse: "1313 Rue de la Paix",
      sexe: "Masculin",
      classe: "PL5",
      picture: "assets/homme.png",
      section: "Anglophone",
      typeEnseignement: "Général",
      natureEnseignement: "Commercial",
      cycle: "Premier cycle",
      telephone: "0612345684",
      ville: "Amiens",
      nationalite: "Française",
      nomDuPere: "King Père",
      nomDeLaMere: "King Mère",
      scolarites: [
        { 
            id: 16, 
            datePaiement: "2023-05-30", 
            nomEleve: "Blanc", 
            prenomEleve: "Laura", 
            niveau: "Master 1", 
            etat: true, 
            classe: "M1C", 
            montantPaye: "3000",
            resteAPayer: "0" 
        },
      ],
      enseignants: [
        { id: 6,
          nom: "Leroy",
          prenom: "Pierre",
          adresseEmail: "pierre@gmail.com",
          departement: "Département 3",
          profession: "Enseignant",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1977, 1, 18),
          lieuNaissance: "Lille",
          telephone: "0123456790",
          adresse: "20 Boulevard de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique",
          matiere3: "Chimie",
          matiere4: "Biologie",
          matiere5: "Technologie",
          emploiDeTemps: []},
        { id: 6,
          nom: "Leroy",
          prenom: "Pierre",
          adresseEmail: "pierre@gmail.com",
          departement: "Département 3",
          profession: "Enseignant",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1977, 1, 18),
          lieuNaissance: "Lille",
          telephone: "0123456790",
          adresse: "20 Boulevard de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique",
          matiere3: "Chimie",
          matiere4: "Biologie",
          matiere5: "Technologie",
          emploiDeTemps: [] }
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 5, 
        nomDeLaMatiere: "Biologie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en biologie", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    }
      ],
      notes: [
        { id: 5,
          nomEleve: "Jean",
          prenomEleve: "Dupond",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 4",
          sequence: "Sequence 2",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        { id: 5,
          nomEleve: "Jean",
          prenomEleve: "Dupond",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 4",
          sequence: "Sequence 2",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18)}
      ]
    },
    {
      id: 17,
      matricule: "MAT017",
      nom: "Young",
      prenom: "Grace",
      email: "grace.young@example.com",
      dateNaissance: new Date(2001, 9, 5),
      lieuNaissance: "Metz",
      niveau: "Terminale",
      specialite: "Scientifique",
      adresse: "1414 Rue du Fort",
      sexe: "Féminin",
      classe: "TS7",
      picture: "assets/femme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Général",
      cycle: "Second cycle",
      telephone: "0612345685",
      ville: "Metz",
      nationalite: "Française",
      nomDuPere: "Young Père",
      nomDeLaMere: "Young Mère",
      scolarites: [
        { 
            id: 17, 
            datePaiement: "2023-05-31", 
            nomEleve: "Moulin", 
            prenomEleve: "Hugo", 
            niveau: "Master 2", 
            etat: false, 
            classe: "M2A", 
            montantPaye: "2500", 
            resteAPayer: "500" 
        },
      ],
      enseignants: [
        { id: 6,
          nom: "Leroy",
          prenom: "Pierre",
          adresseEmail: "pierre@gmail.com",
          departement: "Département 3",
          profession: "Enseignant",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1977, 1, 18),
          lieuNaissance: "Lille",
          telephone: "0123456790",
          adresse: "20 Boulevard de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique",
          matiere3: "Chimie",
          matiere4: "Biologie",
          matiere5: "Technologie",
          emploiDeTemps: [] },
        { id: 6,
          nom: "Leroy",
          prenom: "Pierre",
          adresseEmail: "pierre@gmail.com",
          departement: "Département 3",
          profession: "Enseignant",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1977, 1, 18),
          lieuNaissance: "Lille",
          telephone: "0123456790",
          adresse: "20 Boulevard de la Victoire",
          matiere1: "Sciences",
          matiere2: "Physique",
          matiere3: "Chimie",
          matiere4: "Biologie",
          matiere5: "Technologie",
          emploiDeTemps: [] }
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 5, 
        nomDeLaMatiere: "Biologie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en biologie", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    },
    {   id: 5, 
      nomDeLaMatiere: "Biologie", 
      niveauEnseignement: "Licence", 
      nbreCredit: 6, 
      description: "Cours de base en biologie", 
      listeDeModule: [
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
      ] 
  }
      ],
      notes: [
        { id: 5,
          nomEleve: "Jean",
          prenomEleve: "Dupond",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 4",
          sequence: "Sequence 2",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        { id: 5,
          nomEleve: "Jean",
          prenomEleve: "Dupond",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 4",
          sequence: "Sequence 2",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) }
      ]
    },
    {
      id: 18,
      matricule: "MAT018",
      nom: "Scott",
      prenom: "Lucas",
      email: "lucas.scott@example.com",
      dateNaissance: new Date(2002, 7, 25),
      lieuNaissance: "Nancy",
      niveau: "Première",
      specialite: "Technologique",
      adresse: "1515 Rue de Lorraine",
      sexe: "Masculin",
      classe: "PT2",
      picture: "assets/homme.png",
      section: "Francophone",
      typeEnseignement: "Technique",
      natureEnseignement: "Général",
      cycle: "Premier cycle",
      telephone: "0612345686",
      ville: "Nancy",
      nationalite: "Française",
      nomDuPere: "Scott Père",
      nomDeLaMere: "Scott Mère",
      scolarites: [
        { 
            id: 18, 
            datePaiement: "2023-06-01", 
            nomEleve: "Dupuis", 
            prenomEleve: "Emma", 
            niveau: "Doctorat", 
            etat: true, 
            classe: "D1C", 
            montantPaye: "4000", 
            resteAPayer: "0" 
        },
    
      ],
      enseignants: [
        { id: 5,
          nom: "Leroux",
          prenom: "Marie",
          adresseEmail: "leroux@gmail.com",
          departement: "Département 3",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1978, 2, 17),
          lieuNaissance: "Toulouse",
          telephone: "0123456789",
          adresse: "9 Rue des Étoiles",
          matiere1: "Arts Plastiques",
          matiere2: "Éducation Musicale",
          matiere3: "Technologie",
          matiere4: "Sciences",
          matiere5: "Physique-Chimie",
          emploiDeTemps: [] },
        { id: 5,
          nom: "Leroux",
          prenom: "Marie",
          adresseEmail: "leroux@gmail.com",
          departement: "Département 3",
          profession: "Enseignante",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1978, 2, 17),
          lieuNaissance: "Toulouse",
          telephone: "0123456789",
          adresse: "9 Rue des Étoiles",
          matiere1: "Arts Plastiques",
          matiere2: "Éducation Musicale",
          matiere3: "Technologie",
          matiere4: "Sciences",
          matiere5: "Physique-Chimie",
          emploiDeTemps: []}
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 5, 
        nomDeLaMatiere: "Biologie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en biologie", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    },
    {   id: 5, 
      nomDeLaMatiere: "Biologie", 
      niveauEnseignement: "Licence", 
      nbreCredit: 6, 
      description: "Cours de base en biologie", 
      listeDeModule: [
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
      ] 
  }
      ],
      notes: [
        { id: 4,
          nomEleve: "Leroy",
          prenomEleve: "Marie",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 5",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) },
        { id: 4,
          nomEleve: "Leroy",
          prenomEleve: "Marie",
          matiere: "Anglais",
          valeur: 15,
          classe: "Classe 5",
          sequence: "Sequence 5",
          enseignant: "Leroy",
          observation: "Très bon travail sur cette séquence",
          noteGenerale: 16,
          premiereNote: 14,
          derniereNote: 17,
          date: new Date(2024, 1, 18) }
      ]
    },
    {
      id: 19,
      matricule: "MAT019",
      nom: "Green",
      prenom: "Isabella",
      email: "isabella.green@example.com",
      dateNaissance: new Date(2003, 4, 15),
      lieuNaissance: "Reims",
      niveau: "Seconde",
      specialite: "Littéraire",
      adresse: "1616 Rue du Champagne",
      sexe: "Féminin",
      classe: "SL2",
      picture: "assets/femme.png",
      section: "Francophone",
      typeEnseignement: "Général",
      natureEnseignement: "Général",
      cycle: "Second cycle",
      telephone: "0612345687",
      ville: "Reims",
      nationalite: "Française",
      nomDuPere: "Green Père",
      nomDeLaMere: "Green Mère",
      scolarites: [
        { 
            id: 19, 
            datePaiement: "2023-06-02", 
            nomEleve: "Marchand", 
            prenomEleve: "Noah", 
            niveau: "Licence 1", 
            etat: true, 
            classe: "L1A", 
            montantPaye: "1500", 
            resteAPayer: "500" 
        },
      ],
      enseignants: [
        {  id: 4,
          nom: "Roux",
          prenom: "Julien",
          adresseEmail: "roux@gmail.com",
          departement: "Département 2",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1980, 11, 8),
          lieuNaissance: "Bordeaux",
          telephone: "0123456788",
          adresse: "8 Rue de la Paix",
          matiere1: "Histoire",
          matiere2: "Géographie",
          matiere3: "EMC",
          matiere4: "Latin",
          matiere5: "Grec",
          emploiDeTemps: [] },
        {  id: 4,
          nom: "Roux",
          prenom: "Julien",
          adresseEmail: "roux@gmail.com",
          departement: "Département 2",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1980, 11, 8),
          lieuNaissance: "Bordeaux",
          telephone: "0123456788",
          adresse: "8 Rue de la Paix",
          matiere1: "Histoire",
          matiere2: "Géographie",
          matiere3: "EMC",
          matiere4: "Latin",
          matiere5: "Grec",
          emploiDeTemps: [] }
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 5, 
        nomDeLaMatiere: "Biologie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en biologie", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    }
      ],
      notes: [
        {  id: 3,
          nomEleve: "Moreau",
          prenomEleve: "Lucie",
          matiere: "Physique-Chimie",
          valeur: 18,
          classe: "Classe 3",
          sequence: "Sequence 3",
          enseignant: "Dupuis",
          observation: "Participation exceptionnelle en classe",
          noteGenerale: 19,
          premiereNote: 17,
          derniereNote: 20,
          date: new Date(2024, 4, 5) },
        {  id: 3,
          nomEleve: "Moreau",
          prenomEleve: "Lucie",
          matiere: "Physique-Chimie",
          valeur: 18,
          classe: "Classe 3",
          sequence: "Sequence 3",
          enseignant: "Dupuis",
          observation: "Participation exceptionnelle en classe",
          noteGenerale: 19,
          premiereNote: 17,
          derniereNote: 20,
          date: new Date(2024, 4, 5) }
      ]
    },
    {
      id: 20,
      matricule: "MAT020",
      nom: "Baker",
      prenom: "Liam",
      email: "liam.baker@example.com",
      dateNaissance: new Date(2004, 12, 20),
      lieuNaissance: "Poitiers",
      niveau: "Terminale",
      specialite: "Scientifique",
      adresse: "1717 Rue des Fleurs",
      sexe: "Masculin",
      classe: "TS8",
      picture: "assets/homme.png",
      section: "Anglophone",
      typeEnseignement: "Général",
      natureEnseignement: "Général",
      cycle: "Second cycle",
      telephone: "0612345688",
      ville: "Poitiers",
      nationalite: "Française",
      nomDuPere: "Baker Père",
      nomDeLaMere: "Baker Mère",
      scolarites: [
        { 
            id: 20, 
            datePaiement: "2023-06-03", 
            nomEleve: "Dubois", 
            prenomEleve: "Lea", 
            niveau: "Licence 2", 
            etat: false, 
            classe: "L2B", 
            montantPaye: "1000", 
            resteAPayer: "1000"
         }
      ],
      enseignants: [
        { id: 1,
          nom: "Dupuis",
          prenom: "Émilie",
          adresseEmail: "dupuis@gmail.com",
          departement: "Département 2",
          profession: "Enseignant",
          sexe: "Féminin",
          picture: "src/assets/femme.png",
          nationalite: "Française",
          dateNaissance: new Date(1982, 3, 25),
          lieuNaissance: "Lyon",
          telephone: "0123456785",
          adresse: "5 Rue de la Paix",
          matiere1: "Physique-Chimie",
          matiere2: "SVT",
          matiere3: "Langues Vivantes",
          matiere4: "Arts Plastiques",
          matiere5: "Éducation Musicale",
          emploiDeTemps: [] },
        { id: 2,
          nom: "Landry",
          prenom: "Antoine",
          adresseEmail: "dupuis@gmail.com",
          departement: "Département 3",
          profession: "Professeur",
          sexe: "Masculin",
          picture: "src/assets/homme.png",
          nationalite: "Française",
          dateNaissance: new Date(1979, 9, 12),
          lieuNaissance: "Paris",
          telephone: "0123456786",
          adresse: "6 Rue du Commerce",
          matiere1: "Mathématiques",
          matiere2: "Informatique",
          matiere3: "Sciences",
          matiere4: "Géographie",
          matiere5: "Histoire",
          emploiDeTemps: [] }
      ],
      matieres: [
        {   id: 5, 
          nomDeLaMatiere: "Biologie", 
          niveauEnseignement: "Licence", 
          nbreCredit: 6, 
          description: "Cours de base en biologie", 
          listeDeModule: [
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
              {   id: 3, 
                  nomDuModule: "Informatique", 
                  nomMatiere: "Informatique", 
                  description: "Introduction aux structures de données", 
                  listeDesChapitres: [
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      },
          
                      {   id: 5, 
                          titreChapitre: "Intelligence artificielle", 
                          nomDuModule: "IA", 
                          description: "Introduction à l'intelligence artificielle", 
                          listeDesLecons: [
                              {   id: 12, 
                                  titreLecon: "Bases de données", 
                                  nomDuChapitre: "Informatique générale", 
                                  description: "Introduction aux bases de données" 
                              },
                              {   id: 13, 
                                  titreLecon: "Machine learning", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au machine learning" 
                              },
                              {   id: 14, 
                                  titreLecon: "Réseaux de neurones", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Les réseaux de neurones en IA" 
                              },
                              {   id: 15, 
                                  titreLecon: "Traitement du langage naturel", 
                                  nomDuChapitre: "Intelligence artificielle", 
                                  description: "Introduction au traitement du langage naturel" 
                              }
                          ] 
                      }
                  ]
              },
          ] 
      },
      {   id: 5, 
        nomDeLaMatiere: "Biologie", 
        niveauEnseignement: "Licence", 
        nbreCredit: 6, 
        description: "Cours de base en biologie", 
        listeDeModule: [
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
            {   id: 3, 
                nomDuModule: "Informatique", 
                nomMatiere: "Informatique", 
                description: "Introduction aux structures de données", 
                listeDesChapitres: [
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    },
        
                    {   id: 5, 
                        titreChapitre: "Intelligence artificielle", 
                        nomDuModule: "IA", 
                        description: "Introduction à l'intelligence artificielle", 
                        listeDesLecons: [
                            {   id: 12, 
                                titreLecon: "Bases de données", 
                                nomDuChapitre: "Informatique générale", 
                                description: "Introduction aux bases de données" 
                            },
                            {   id: 13, 
                                titreLecon: "Machine learning", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au machine learning" 
                            },
                            {   id: 14, 
                                titreLecon: "Réseaux de neurones", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Les réseaux de neurones en IA" 
                            },
                            {   id: 15, 
                                titreLecon: "Traitement du langage naturel", 
                                nomDuChapitre: "Intelligence artificielle", 
                                description: "Introduction au traitement du langage naturel" 
                            }
                        ] 
                    }
                ]
            },
        ] 
    },
    {   id: 5, 
      nomDeLaMatiere: "Biologie", 
      niveauEnseignement: "Licence", 
      nbreCredit: 6, 
      description: "Cours de base en biologie", 
      listeDeModule: [
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
          {   id: 3, 
              nomDuModule: "Informatique", 
              nomMatiere: "Informatique", 
              description: "Introduction aux structures de données", 
              listeDesChapitres: [
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  },
      
                  {   id: 5, 
                      titreChapitre: "Intelligence artificielle", 
                      nomDuModule: "IA", 
                      description: "Introduction à l'intelligence artificielle", 
                      listeDesLecons: [
                          {   id: 12, 
                              titreLecon: "Bases de données", 
                              nomDuChapitre: "Informatique générale", 
                              description: "Introduction aux bases de données" 
                          },
                          {   id: 13, 
                              titreLecon: "Machine learning", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au machine learning" 
                          },
                          {   id: 14, 
                              titreLecon: "Réseaux de neurones", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Les réseaux de neurones en IA" 
                          },
                          {   id: 15, 
                              titreLecon: "Traitement du langage naturel", 
                              nomDuChapitre: "Intelligence artificielle", 
                              description: "Introduction au traitement du langage naturel" 
                          }
                      ] 
                  }
              ]
          },
      ] 
  }
      ],
      notes: [
        { id: 1,
          nomEleve: "Dubois",
          prenomEleve: "Louis",
          matiere: "Mathématiques",
          valeur: 14,
          classe: "Classe 1",
          sequence: "Sequence 1",
          enseignant: "Martin",
          observation: "Très bon travail",
          noteGenerale: 15,
          premiereNote: 13,
          derniereNote: 16,
          date: new Date(2024, 3, 12) },
        { id: 2,
          nomEleve: "Lefevre",
          prenomEleve: "Camille",
          matiere: "Français",
          valeur: 16,
          classe: "Classe 2",
          sequence: "Sequence 2",
          enseignant: "Morel",
          observation: "Excellent progrès",
          noteGenerale: 17,
          premiereNote: 15,
          derniereNote: 18,
          date: new Date(2024, 2, 25) }
      ]
    }
  ];
  