import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { MatSliderModule } from '@angular/material/slider';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import {MdCardModule} from '@angular/material';

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
import { HomeComponent } from './client/home/home.component';
import { NavClientComponent } from './client/nav-client/nav-client.component';
import { BoutiqueComponent } from './client/boutique/boutique.component';
import { SideNavClientComponent } from './client/side-nav-client/side-nav-client.component';
import { BoutiqueCategorieComponent } from './client/boutique-categorie/boutique-categorie.component';
import { ShopingCartComponent } from './client/shoping-cart/shoping-cart.component';
import { AboutComponent } from './client/about/about.component';
import { CommandeComponent } from './admin/commande/commande.component';
import { DetailCommandeComponent } from './admin/detail-commande/detail-commande.component';
import { DetailProduitComponent } from './client/detail-produit/detail-produit.component';

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
    HomeComponent,
    NavClientComponent,
    BoutiqueComponent,
    SideNavClientComponent,
    BoutiqueCategorieComponent,
    ShopingCartComponent,
    AboutComponent,
    CommandeComponent,
    DetailCommandeComponent,
    DetailProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // MaterialModule,
    // MatSidenavModule
    // MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
