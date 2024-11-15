import { Chapitre } from "../chapitres/chapitre";


export class Module {
    
    id: number | undefined;
    nomDuModule: string | undefined;
    nomMatiere: string | undefined;
    description: string | undefined;
    listeDesChapitres: Array<Chapitre> | undefined;
}
