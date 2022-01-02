import { Injectable } from '@angular/core';
import { Client } from './model/client.model';
import { Commande } from './model/commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
clients : Client[];
commande :Commande;
commandes : Commande[];
  constructor() {
    this.clients = [{idClient:1,idDevis:2,nomClient:"boumaiza",telClient:258964,RibClient:"ll",typeClient:"passager",chantier:{IdChantier :1,nomChantier:"chantier 1", adresse: "adresse 1"}},
    {idClient:1,idDevis:2,nomClient:"boumaiza",telClient:258964,RibClient:"ll",typeClient:"passager",chantier:{IdChantier :1,nomChantier:"chantier 1", adresse: "adresse 1"}},
    {idClient:1,idDevis:2,nomClient:"boumaiza",telClient:258964,RibClient:"ll",typeClient:"passager",chantier:{IdChantier :1,nomChantier:"chantier 1", adresse: "adresse 1"}}
  ];
  this.commandes=[
    {numCommande:1,date:new Date("02/20/2020"),heureCollage:"19h",qteCommande:500,pompage:"oui",client:{idClient:1,idDevis:2,nomClient:"boumaiza",telClient:258964,RibClient:"ll",typeClient:"passager",chantier:{IdChantier :1,nomChantier:"chantier 1", adresse: "adresse 1"}}},
    {numCommande:1,date:new Date("02/20/2020"),heureCollage:"19h",qteCommande:500,pompage:"oui",client:{idClient:1,idDevis:2,nomClient:"boumaiza",telClient:258964,RibClient:"ll",typeClient:"passager",chantier:{IdChantier :1,nomChantier:"chantier 1", adresse: "adresse 1"}}},
    {numCommande:1,date:new Date("02/20/2020"),heureCollage:"19h",qteCommande:500,pompage:"oui",client:{idClient:1,idDevis:2,nomClient:"boumaiza",telClient:258964,RibClient:"ll",typeClient:"passager",chantier:{IdChantier :1,nomChantier:"chantier 1", adresse: "adresse 1"}}}
  ];
   }
   listeCommandes():Commande[] {
    return this.commandes;
  }
  ajouterCommandes( prod: Commande){
  this.commandes.push(prod);
 }
 consulterCommande(id:number): Commande{
  this.commande = this.commandes.find(p => p.numCommande == id);
  return this.commande;
  }
  updateCommande(p:Commande)
    {
    // console.log(p);
    //this.supprimerProduit(p);
    this.ajouterCommandes(p);
  }
}

