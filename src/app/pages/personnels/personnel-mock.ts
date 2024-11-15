import { Personnel } from "./personnel";

export const PERSONNELS: Personnel[] = [
    {
      id: 1,
      nom: 'Dupont',
      prenom: 'Jean',
      picture: 'assets/homme.png',
      sexe: 'Masculin',
      email: 'jean.dupont@example.com',
      profession: 'Ingénieur',
      diplome: 'Master en Informatique',
      nationalite: 'Française',
      dateNaiss: new Date('1985-03-15'),
      lieuNaiss: 'Paris, France',
      typeContrat: 'CDI',
      debutContrat: new Date('2020-01-10'),
      adresse: '123 Rue de la République, 75001 Paris',
      telephone: '0123456789'
    },
    {
      id: 2,
      nom: 'Smith',
      prenom: 'Emily',
      picture: 'assets/femme.png',
      sexe: 'Féminin',
      email: 'emily.smith@example.com',
      profession: 'Développeuse Web',
      diplome: 'Licence en Génie Logiciel',
      nationalite: 'Britannique',
      dateNaiss: new Date('1990-07-22'),
      lieuNaiss: 'Londres, Royaume-Uni',
      typeContrat: 'CDD',
      debutContrat: new Date('2023-06-01'),
      adresse: '45 Baker Street, Londres',
      telephone: '+44 7896543210'
    },
    {
      id: 3,
      nom: 'Nguyen',
      prenom: 'Linh',
      picture: 'assets/femme.png',
      sexe: 'Féminin',
      email: 'linh.nguyen@example.com',
      profession: 'Data Analyst',
      diplome: 'Master en Statistiques',
      nationalite: 'Vietnamienne',
      dateNaiss: new Date('1993-12-02'),
      lieuNaiss: 'Hanoï, Vietnam',
      typeContrat: 'CDI',
      debutContrat: new Date('2021-09-15'),
      adresse: '12 Pham Van Dong, Hanoï',
      telephone: '+84 123456789'
    },
    {
      id: 4,
      nom: 'Garcia',
      prenom: 'Miguel',
      picture: 'assets/homme.png',
      sexe: 'Masculin',
      email: 'miguel.garcia@example.com',
      profession: 'Consultant IT',
      diplome: 'MBA',
      nationalite: 'Espagnole',
      dateNaiss: new Date('1987-11-08'),
      lieuNaiss: 'Madrid, Espagne',
      typeContrat: 'Freelance',
      debutContrat: new Date('2019-03-25'),
      adresse: 'Avenida de América, Madrid',
      telephone: '+34 654321098'
    },
    {
      id: 5,
      nom: 'Johnson',
      prenom: 'Michael',
      picture: 'assets/homme.png',
      sexe: 'Masculin',
      email: 'michael.johnson@example.com',
      profession: 'Chef de Projet',
      diplome: 'Master en Management',
      nationalite: 'Américaine',
      dateNaiss: new Date('1982-04-10'),
      lieuNaiss: 'New York, USA',
      typeContrat: 'CDI',
      debutContrat: new Date('2018-05-15'),
      adresse: '456 5th Avenue, New York',
      telephone: '+1 9876543210'
    },
    {
      id: 6,
      nom: 'Moreau',
      prenom: 'Sophie',
      picture: 'assets/femme.png',
      sexe: 'Féminin',
      email: 'sophie.moreau@example.com',
      profession: 'Designer Graphique',
      diplome: 'Licence en Arts Visuels',
      nationalite: 'Française',
      dateNaiss: new Date('1995-09-17'),
      lieuNaiss: 'Lyon, France',
      typeContrat: 'Stage',
      debutContrat: new Date('2024-01-10'),
      adresse: '7 Place Bellecour, Lyon',
      telephone: '0987654321'
    },
    {
      id: 7,
      nom: 'Martinez',
      prenom: 'Carlos',
      picture: 'assets/homme.png',
      sexe: 'Masculin',
      email: 'carlos.martinez@example.com',
      profession: 'Architecte Logiciel',
      diplome: 'Doctorat en Informatique',
      nationalite: 'Mexicaine',
      dateNaiss: new Date('1979-05-25'),
      lieuNaiss: 'Mexico, Mexique',
      typeContrat: 'CDI',
      debutContrat: new Date('2016-10-30'),
      adresse: 'Calle Reforma, Mexico City',
      telephone: '+52 987654321'
    },
    {
      id: 8,
      nom: 'Rossi',
      prenom: 'Laura',
      picture: 'assets/femme.png',
      sexe: 'Féminin',
      email: 'laura.rossi@example.com',
      profession: 'Responsable Marketing',
      diplome: 'Master en Marketing Digital',
      nationalite: 'Italienne',
      dateNaiss: new Date('1988-06-13'),
      lieuNaiss: 'Milan, Italie',
      typeContrat: 'CDI',
      debutContrat: new Date('2017-04-21'),
      adresse: 'Via Monte Napoleone, Milan',
      telephone: '+39 321654987'
    },
    {
      id: 9,
      nom: 'Kim',
      prenom: 'Jin',
      picture: 'assets/homme.png',
      sexe: 'Masculin',
      email: 'jin.kim@example.com',
      profession: 'Ingénieur DevOps',
      diplome: 'Master en Réseaux et Systèmes',
      nationalite: 'Coréenne',
      dateNaiss: new Date('1991-08-30'),
      lieuNaiss: 'Séoul, Corée du Sud',
      typeContrat: 'CDI',
      debutContrat: new Date('2022-01-05'),
      adresse: 'Gangnam, Séoul',
      telephone: '+82 1098765432'
    },
    {
      id: 10,
      nom: 'Schmidt',
      prenom: 'Anna',
      picture: 'assets/femme.png',
      sexe: 'Féminin',
      email: 'anna.schmidt@example.com',
      profession: 'Traductrice',
      diplome: 'Licence en Langues Étrangères',
      nationalite: 'Allemande',
      dateNaiss: new Date('1992-12-18'),
      lieuNaiss: 'Berlin, Allemagne',
      typeContrat: 'Freelance',
      debutContrat: new Date('2020-11-01'),
      adresse: 'Kurfürstendamm, Berlin',
      telephone: '+49 123456789'
    },
    {
      id: 11,
      nom: 'Ali',
      prenom: 'Khaled',
      picture: 'assets/homme.png',
      sexe: 'Masculin',
      email: 'khaled.ali@example.com',
      profession: 'Développeur Mobile',
      diplome: 'Licence en Informatique',
      nationalite: 'Égyptienne',
      dateNaiss: new Date('1994-07-27'),
      lieuNaiss: 'Le Caire, Égypte',
      typeContrat: 'CDI',
      debutContrat: new Date('2023-03-10'),
      adresse: 'Zamalek, Le Caire',
      telephone: '+20 9876543210'
    },
    {
      id: 12,
      nom: 'Omar',
      prenom: 'Amina',
      picture: 'assets/femme.png',
      sexe: 'Féminin',
      email: 'amina.omar@example.com',
      profession: 'Chargée de Recrutement',
      diplome: 'Master en Ressources Humaines',
      nationalite: 'Marocaine',
      dateNaiss: new Date('1989-10-12'),
      lieuNaiss: 'Casablanca, Maroc',
      typeContrat: 'CDI',
      debutContrat: new Date('2019-07-22'),
      adresse: 'Quartier Maarif, Casablanca',
      telephone: '+212 987654321'
    },
    {
      id: 13,
      nom: 'Haddad',
      prenom: 'Sami',
      picture: 'assets/homme.png',
      sexe: 'Masculin',
      email: 'sami.haddad@example.com',
      profession: 'Spécialiste SEO',
      diplome: 'Master en Communication Digitale',
      nationalite: 'Libanaise',
      dateNaiss: new Date('1991-05-20'),
      lieuNaiss: 'Beyrouth, Liban',
      typeContrat: 'Freelance',
      debutContrat: new Date('2021-02-12'),
      adresse: 'Rue Hamra, Beyrouth',
      telephone: '+961 789654321'
    },
    {
      id: 14,
      nom: 'Yamamoto',
      prenom: 'Sakura',
      picture: 'assets/femme.png',
      sexe: 'Féminin',
      email: 'sakura.yamamoto@example.com',
      profession: 'UX Designer',
      diplome: 'Licence en Design Graphique',
      nationalite: 'Japonaise',
      dateNaiss: new Date('1996-02-28'),
      lieuNaiss: 'Tokyo, Japon',
      typeContrat: 'CDD',
      debutContrat: new Date('2022-07-15'),
      adresse: 'Shibuya, Tokyo',
      telephone: '+81 1234567890'
    },
    {
      id: 15,
      nom: 'Patel',
      prenom: 'Rajesh',
      picture: 'assets/homme.png',
      sexe: 'Masculin',
      email: 'rajesh.patel@example.com',
      profession: 'Analyste Financier',
      diplome: 'MBA Finance',
      nationalite: 'Indienne',
      dateNaiss: new Date('1985-11-05'),
      lieuNaiss: 'Mumbai, Inde',
      typeContrat: 'CDI',
      debutContrat: new Date('2017-08-20'),
      adresse: 'Nariman Point, Mumbai',
      telephone: '+91 9876543210'
    }
  ];
  