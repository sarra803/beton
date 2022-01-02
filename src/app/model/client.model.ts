import { Chantier } from "./chantier.model";

export class Client{
    idClient :number;
    idDevis:number;
    nomClient :string;
    telClient:number;
    RibClient:string;
    typeClient:string;
    chantier : Chantier;
}