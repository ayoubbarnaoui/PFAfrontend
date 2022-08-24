import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/models/produit';
import { ProduitService } from 'src/services/produit.service';

// import { Subscription } from 'rxjs';
@Component({
  selector: 'app-produits-categorie',
  templateUrl: './produits-categorie.component.html',
  styleUrls: ['./produits-categorie.component.css']
})
export class ProduitsCategorieComponent implements OnInit {
  produit =new Produit();
  produitList:any =[];

  public imageDirectPath:any='http://127.0.0.1:8000/uploads/images/produits/';
  rId:any;
  constructor(private rout:Router ,private produitServ:ProduitService) {
    // const navigation:any = this.rout.getCurrentNavigation();
    // this.rId = navigation.extras;
  }

  ngOnInit(): void {
    if(localStorage.getItem("tokenAdmin")==null){

      this.rout.navigate(["/homeAdmin"]);
    }
    this.rId=localStorage.getItem('id');
    // this.getProduitsCategorie(this.rId);
    // localStorage.removeItem('id');
    // console.log("le path est = "+this.rout.url);
    localStorage.removeItem("myPath");
    if(this.rout.url == "/categorie/produits-categorie/"+this.rId){
      this.getProduitsCategorie(this.rId);
    }
    else{
        this. getProduits();
    }
  }
  getProduitsCategorie(id:any){
    this.produitServ.getProduitCategorie(id).subscribe(
      result=>{
        this.produitList=result;
        console.log(result);
      }
    )
  }
  getProduits(){
    this.produitServ.getAllProduit().subscribe(
      result=>{
        this.produitList=result;
        console.log(result);
      }
    )
  }
  gotoAddProduit(){
    localStorage.setItem("rId", this.rId);
    localStorage.setItem("myPath", this.rout.url);
      this.rout.navigate(["add/produit"]);
  }
  suppProduit(id:any){
    this.produitServ.suppProduit(id).subscribe(
      sr=>{
        console.log("supp vrai")
      }
    );
    this.ngOnInit();
  }

  updateProduit(Returnproduit:any,id:any){
    localStorage.setItem("myPath", this.rout.url);
    this.rout.navigate(["update/produit/",id],Returnproduit);
    console.log(Returnproduit);
  }

}
