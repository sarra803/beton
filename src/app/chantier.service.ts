import { Injectable } from '@angular/core';
import { Chantier } from './model/chantier.model';

@Injectable({
  providedIn: 'root'
})
export class ChantierService {
 chantiers : Chantier[];
 chantier:Chantier;
   constructor() { 
     this.chantiers=[
       {IdChantier:1,nomChantier:"chantier 1",adresse:"adresse 1"},
       {IdChantier:2,nomChantier:"chantier 2",adresse:"adresse 2"},
       {IdChantier:3,nomChantier:"chantier 3",adresse:"adresse 3"}
     ]
   }
   listeChantiers():Chantier[] {
    return this.chantiers;
  }
  ajouterChantier( prod: Chantier){
  this.chantiers.push(prod);
  }
  consulterChantier(id:number): Chantier{
    this.chantier = this.chantiers.find(p => p.IdChantier == id);
    return this.chantier;
    }
    updateChantier(p:Chantier)
    {
    // console.log(p);
    //this.supprimerProduit(p);
    this.ajouterChantier(p);
  }

}