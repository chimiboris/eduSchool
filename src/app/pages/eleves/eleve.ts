import { Enseignant } from "../enseignants/enseignant";
import { Matiere } from "../matiere/matiere";
import { Note } from "../notes/note";
import { Scolarite } from "../scolarites/scolarite";

export class Eleve {

    id: number | undefined;
    matricule: string | undefined;
    nom: string | undefined;
    prenom: string | undefined;
    email: string|undefined;
    dateNaissance: Date | undefined;
    lieuNaissance: string|undefined;
    niveau: string | undefined;
    specialite: string | undefined;
    adresse: string | undefined;
    sexe: string | undefined;
    classe: string | undefined;
    picture: string | undefined;
    section: string|undefined;
    typeEnseignement: string|undefined;
    natureEnseignement: string|undefined
    cycle: string|undefined;
    telephone: string|undefined;
    ville: string|undefined;
    nationalite: string|undefined;
    nomDuPere: string|undefined;
    nomDeLaMere: string|undefined;
    enseignants: Array<Enseignant> | undefined;
    matieres: Array<Matiere> | undefined;
    notes: Array<Note> | undefined;
    scolarites: Array<Scolarite> | undefined;


    constructor(
        id = 0,
        matricule = 'N/A',
        nom = 'Nom par défaut',
        prenom = 'Prénom par défaut',
        email = 'email@example.com',
        dateNaissance = new Date('2000-01-01'),
        lieuNaissance = 'Lieu de naissance par défaut',
        niveau = 'Niveau par défaut',
        specialite = 'Spécialité par défaut',
        adresse = 'Adresse par défaut',
        sexe = 'Sexe par défaut',
        classe = 'Classe par défaut',
        picture = 'assets/profile.jpg',
        section = 'Section par défaut',
        typeEnseignement = 'Type d\'enseignement par défaut',
        natureEnseignement = 'Nature d\'enseignement par défaut',
        cycle = 'Cycle par défaut',
        telephone = '0102030405',
        ville = 'Ville par défaut',
        nationalite = 'Nationalité par défaut',
        nomDuPere = 'Nom du père par défaut',
        nomDeLaMere = 'Nom de la mère par défaut',
        enseignants: Array<Enseignant> = [],
        matieres: Array<Matiere> = [],
        notes: Array<Note> = [],
        scolarites: Array<Scolarite> = []
    ){

        this.id = id;
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.dateNaissance = dateNaissance;
        this.lieuNaissance = lieuNaissance;
        this.niveau = niveau;
        this.specialite = specialite;
        this.adresse = adresse;
        this.sexe = sexe;
        this.classe = classe;
        this.picture = picture;
        this.section = section;
        this.typeEnseignement = typeEnseignement;
        this.natureEnseignement = natureEnseignement;
        this.cycle = cycle;
        this.telephone = telephone;
        this.ville = ville;
        this.nationalite = nationalite;
        this.nomDuPere = nomDuPere;
        this.nomDeLaMere = nomDeLaMere;
        this.picture = picture;
        this.enseignants = enseignants;
        this.matieres = matieres;
        this.notes = notes;
        this.scolarites = scolarites;
    }
    
}
