import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './admin/add-produit/add-produit.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { LoginComponent } from './admin/login/login.component';
import { ProduitsCategorieComponent } from './admin/produits-categorie/produits-categorie.component';
import { ShowCategorieComponent } from './admin/show-categorie/show-categorie.component';
import { UpdateCategorieComponent } from './admin/update-categorie/update-categorie.component';
import { UpdateProduitComponent } from './admin/update-produit/update-produit.component';
import { BoutiqueCategorieComponent } from './client/boutique-categorie/boutique-categorie.component';
import { BoutiqueComponent } from './client/boutique/boutique.component';
import { HomeComponent } from './client/home/home.component';



const routes: Routes = [
  {path : "login", component :LoginComponent},
  {path : "categories", component :ShowCategorieComponent},
  {path : "categorie/produits-categorie/:id", component :ProduitsCategorieComponent},
  {path : "produits", component :ProduitsCategorieComponent},
  {path : "add/produit", component :AddProduitComponent},
  {path : "update/produit/:id", component :UpdateProduitComponent},
  {path : "categorie/update-categorie/:id", component :UpdateCategorieComponent},
  {path : "homeAdmin", component :HomeAdminComponent},
  {path : "boutique", component :BoutiqueComponent},
  {path : "boutique/:titre", component :BoutiqueCategorieComponent},

  {path : "home", component :HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,

  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
