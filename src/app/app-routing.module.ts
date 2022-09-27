import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './admin/add-produit/add-produit.component';
import { CommandeComponent } from './admin/commande/commande.component';
import { DetailCommandeComponent } from './admin/detail-commande/detail-commande.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { LoginComponent } from './admin/login/login.component';
import { ProduitsCategorieComponent } from './admin/produits-categorie/produits-categorie.component';
import { ShowCategorieComponent } from './admin/show-categorie/show-categorie.component';
import { UpdateCategorieComponent } from './admin/update-categorie/update-categorie.component';
import { UpdateProduitComponent } from './admin/update-produit/update-produit.component';
import { AboutComponent } from './client/about/about.component';
import { BoutiqueCategorieComponent } from './client/boutique-categorie/boutique-categorie.component';
import { BoutiqueComponent } from './client/boutique/boutique.component';
import { DetailProduitComponent } from './client/detail-produit/detail-produit.component';
import { HomeComponent } from './client/home/home.component';
import { ShopingCartComponent } from './client/shoping-cart/shoping-cart.component';



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
  {path : "boutique/cart/shoping", component :ShopingCartComponent},
  {path : "about", component :AboutComponent},
  {path : "commandes", component :CommandeComponent},
  {path : "commande/detail", component :DetailCommandeComponent},
  {path : "produit/detail/:nom", component :DetailProduitComponent},
  {path : "home", component :HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,

  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
