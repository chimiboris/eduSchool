import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { ELEVES } from './pages/eleves/mock-eleves-list';
import { ENSEIGNANTS } from './pages/enseignants/mock-enseignants-list';
import { PARENTS } from './pages/parents/mock-parents-list';
import { PERSONNELS } from './pages/personnels/personnel-mock';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  
createDb(){
  const eleves = ELEVES;
  const enseignants = ENSEIGNANTS;
  const parents = PARENTS;
  const personnels = PERSONNELS;
    return  { eleves, enseignants, parents, personnels };
  }
}
