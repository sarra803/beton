import { Injectable } from '@angular/core';
import { Chantier } from './model/chantier.model';
import { Client } from './model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
clients : Client[];
client:Client;
  chantiers: Chantier[];
  constructor() {
    this.chantiers = [
      {IdChantier :1,nomChantier:"chantier 1", adresse: "adresse 1"},
      {IdChantier :2,nomChantier:"chantier 2", adresse: "adresse 2"},
      {IdChantier :3,nomChantier:"chantier 3", adresse: "adresse 3"}
    ];
    this.clients = [{idClient:1,idDevis:2,nomClient:"boumaiza",telClient:258964,RibClient:"ll",typeClient:"passager",chantier:{IdChantier :1,nomChantier:"chantier 1", adresse: "adresse 1"}},
    {idClient:1,idDevis:2,nomClient:"boumaiza",telClient:258964,RibClient:"ll",typeClient:"passager",chantier:{IdChantier :1,nomChantier:"chantier 1", adresse: "adresse 1"}},
    {idClient:1,idDevis:2,nomClient:"boumaiza",telClient:258964,RibClient:"ll",typeClient:"passager",chantier:{IdChantier :1,nomChantier:"chantier 1", adresse: "adresse 1"}}
  ];
   }
  listeClients():Client[] {
    return this.clients;
  }
  ajouterClient( prod: Client){
  this.clients.push(prod);
  }
  consulterClient(id:number): Client{
    this.client = this.clients.find(p => p.idClient == id);
    return this.client;
    }
    updateClient(p:Client)
    {
    // console.log(p);
    //this.supprimerProduit(p);
    this.ajouterClient(p);
  }
}
