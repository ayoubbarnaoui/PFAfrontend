import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { FormsModule } from '@angular/forms';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { ShowCategorieComponent } from './admin/show-categorie/show-categorie.component';
import { ProduitsCategorieComponent } from './admin/produits-categorie/produits-categorie.component';
import { AddProduitComponent } from './admin/add-produit/add-produit.component';
import { UpdateProduitComponent } from './admin/update-produit/update-produit.component';
import { UpdateCategorieComponent } from './admin/update-categorie/update-categorie.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavAdminComponent,
    ShowCategorieComponent,
    ProduitsCategorieComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    UpdateCategorieComponent,
    HomeAdminComponent,
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
