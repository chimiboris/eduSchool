import { Eleve } from "../eleves/eleve";

export class Parent {

    id: number | undefined;
    nom: string | undefined;
    prenom: string | undefined;
    adresseEmail: string | undefined;
    adresse: string | undefined;
    nationalite: string|undefined;
    sexe: string|undefined;
    picture: string | undefined;
    profession: string | undefined;
    telephone: string | undefined;
    listeDesEnfants: Array<Eleve> | undefined;


    constructor(
        id = 0,
        nom = "nom du parent par defaut",
        prenom = "prenom du parent par defaut",
        email = "pat@example.com",
        adresse = "adresse du parent par defaut",
        nationalite = 'nationalité par defaut du parent',
        sexe = 'sexe par defaut',
        picture = "assets/femme.png",
        profession = "profession du parent par defaut",
        telephone = "telephone du parent par defaut",
        listeDesEnfants = []
    ){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.adresseEmail = email;
        this.adresse = adresse;
        this.nationalite = nationalite;
        this.sexe = sexe;
        this.picture = picture;
        this.profession = profession;
        this.telephone = telephone;
        this.listeDesEnfants = listeDesEnfants;
    }


}