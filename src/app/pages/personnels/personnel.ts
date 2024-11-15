

export class Personnel {
    id: number|undefined;
    nom: string|undefined;
    prenom: string|undefined;
    picture: string|undefined;
    sexe: string|undefined;
    email: string|undefined;
    profession: string|undefined;
    diplome: string|undefined;
    nationalite: string|undefined;
    dateNaiss: Date|undefined;
    lieuNaiss: string|undefined;
    typeContrat: string|undefined;
    debutContrat: Date|undefined;
    adresse: string|undefined;
    telephone: string|undefined;

    constructor(
        id = 0,
        nom = 'nom par defaut',
        prenom = 'prenom par defaut',
        adressMail = 'pat@example.com',
        picture = 'asset/profile.png',
        sexe = 'Masculin',
        profession = 'profession par defaut',
        diplome = 'diplome par defaut',
        nationalite = 'nationalité par defaut',
        dateNaiss = new Date('2000-01-01'),
        lieuNaiss = ' lieu par defaut',
        typeContrat = 'CDI',
        debutContrat = new Date('2014-01-01'),
        adresse = 'adresse par defaut',
        telephone = '+33 646464781'
    ){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = adressMail;
        this.picture = picture;
        this.sexe = sexe;
        this.profession = profession;
        this.diplome = diplome;
        this.nationalite = nationalite;
        this.dateNaiss = dateNaiss;
        this.lieuNaiss = lieuNaiss;
        this.typeContrat = typeContrat;
        this.debutContrat = debutContrat;
        this.adresse = adresse;
        this.telephone = telephone;
    }
}