import { Module } from "./module";


const MODULES: Module[] = [

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
];
