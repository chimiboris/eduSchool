import { Lecon } from "../lecons/lecon";


export class Chapitre {

    id: number | undefined;
    titreChapitre: string | undefined;
    nomDuModule: string | undefined;
    description: string | undefined;
    listeDesLecons: Array<Lecon> | undefined;
}
