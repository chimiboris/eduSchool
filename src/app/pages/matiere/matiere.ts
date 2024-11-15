import { Module } from "../modules/module";

export class Matiere {

    id: number | undefined;
    nomDeLaMatiere: string | undefined;
    niveauEnseignement: string | undefined;
    nbreCredit: number | undefined;
    description: string | undefined;
    listeDeModule: Array<Module> | undefined;
}
