import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ChantierComponent } from './chantier/chantier.component';
import { CommandeComponent } from './commande/commande.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { AddChantierComponent } from './add-chantier/add-chantier.component';
import { FormsModule } from '@angular/forms';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';
import { UpdateChantierComponent } from './update-chantier/update-chantier.component';
import { RechercheParNomChantierComponent } from './recherche-par-nom-chantier/recherche-par-nom-chantier.component';
import { RechercheParNomClientComponent } from './recherche-par-nom-client/recherche-par-nom-client.component';
import { RechercheParNumCommandeComponent } from './recherche-par-num-commande/recherche-par-num-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ChantierComponent,
    CommandeComponent,
    AddClientComponent,
    AddCommandeComponent,
    AddChantierComponent,
    UpdateClientComponent,
    UpdateCommandeComponent,
    UpdateChantierComponent,
    RechercheParNomChantierComponent,
    RechercheParNomClientComponent,
    RechercheParNumCommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
