import { Client } from "./client.model";

export class Commande{
    numCommande :number;
    date: Date;
    heureCollage: string;
    qteCommande:number;
    pompage:string;
    client:Client;
}