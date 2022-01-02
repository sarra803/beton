import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChantierComponent } from './add-chantier/add-chantier.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { ChantierComponent } from './chantier/chantier.component';
import { ClientsComponent } from './clients/clients.component';
import { CommandeComponent } from './commande/commande.component';
import { RechercheParNomChantierComponent } from './recherche-par-nom-chantier/recherche-par-nom-chantier.component';
import { RechercheParNomClientComponent } from './recherche-par-nom-client/recherche-par-nom-client.component';
import { RechercheParNumCommandeComponent } from './recherche-par-num-commande/recherche-par-num-commande.component';
import { UpdateChantierComponent } from './update-chantier/update-chantier.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';


const routes: Routes = [
  {path: "clients", component : ClientsComponent},
  {path: "chantier", component : ChantierComponent},
  {path: "commande", component : CommandeComponent},
  {path: "add-client", component : AddClientComponent},
  {path: "add-commande", component : AddCommandeComponent},
  {path: "add-chantier", component : AddChantierComponent},
  {path: "updateChantier/:id", component: UpdateChantierComponent},
  {path: "updateCommande/:id", component: UpdateCommandeComponent},
  {path: "updateClient/:id", component: UpdateClientComponent},
  {path: "rechercheParNomChantier", component : RechercheParNomChantierComponent},
  {path: "rechercheParNomClient", component : RechercheParNomClientComponent},
  {path: "rechercheParNumCommande", component : RechercheParNumCommandeComponent},
  {path: "", redirectTo: "clients", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
