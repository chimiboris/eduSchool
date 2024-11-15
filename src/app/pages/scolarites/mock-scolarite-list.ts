import { Scolarite } from "./scolarite";


const SCOLARITES: Scolarite[] = [

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
];
