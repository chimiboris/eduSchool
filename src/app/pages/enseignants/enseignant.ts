import { EmploiDeTemps } from "../emploi-de-temps/emploi-de-temps";

export class Enseignant {

    id: number | undefined;
    nom: string | undefined;
    prenom: string | undefined;
    adresseEmail: string | undefined;
    departement: string | undefined;
    profession: string | undefined;
    sexe: string | undefined;
    nationalite: string | undefined;
    dateNaissance: Date | undefined;
    lieuNaissance: string | undefined;
    telephone: string | undefined;
    adresse: string | undefined;
    ville?: string | undefined;
    matiere1: string | undefined;
    matiere2: string | undefined;
    matiere3: string | undefined;
    matiere4: string | undefined;
    matiere5: string | undefined;
    picture: string | undefined;
    emploiDeTemps: Array<EmploiDeTemps> | undefined;


    constructor(
        id = 0,
        nom = 'Nom par défaut',
        prenom = 'Prénom par défaut',
        email = 'email@example.com',
        dateNaissance = new Date('2000-01-01'),
        lieuNaissance = 'Lieu de naissance par défaut',
        departement = 'Niveau par défaut',
        profession = 'Spécialité par défaut',
        adresse = 'Adresse par défaut',
        sexe = 'Sexe par défaut',
        picture = 'assets/profile.jpg',
        telephone = '0102030405',
        ville = 'Ville par défaut',
        nationalite = 'Nationalité par défaut',
        matiere1 = 'matiere par défaut',
        matiere2 = 'matiere par défaut',
        matiere3 = 'matiere par défaut',
        matiere4 = 'matiere par défaut',
        matiere5 = 'matiere par défaut',
        emploiDeTemps: Array<EmploiDeTemps> = []

    ){

        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.departement = departement;
        this;profession = profession;
        this.adresseEmail = email;
        this.dateNaissance = dateNaissance;
        this.lieuNaissance = lieuNaissance;
        this.adresse = adresse;
        this.sexe = sexe;
        this.picture = picture;
        this.telephone = telephone;
        this.ville = ville;
        this.nationalite = nationalite;
        this.picture = picture;
        this.emploiDeTemps = emploiDeTemps;
        this.matiere1 = matiere1;
        this.matiere2 = matiere2;
        this.matiere3 = matiere3;
        this.matiere4 = matiere4;
        this.matiere5 = matiere5;

    }
}
