import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/services/produit.service';

@Component({
  selector: 'app-boutique-categorie',
  templateUrl: './boutique-categorie.component.html',
  styleUrls: ['./boutique-categorie.component.css']
})
export class BoutiqueCategorieComponent implements OnInit {
  produitList:any =[];
  cTitre:any;
  cDesc:any;
  public imageDirectPath:any='http://127.0.0.1:8000/uploads/images/produits/';
  constructor(private rout:Router
    ,private produitServ:ProduitService) {
     }

  ngOnInit(): void {
    this.cTitre=localStorage.getItem('titre');
    this.cDesc=localStorage.getItem('description');
    console.log(localStorage.getItem('description'));
    console.log(localStorage.getItem('id'));

    this.getProduitsCategorie(localStorage.getItem('id'));
  }
  getProduitsCategorie(id:any){
    this.produitServ.getProduitCategorie(id).subscribe(
      result=>{
        this.produitList=result;
        // console.log(result);
      }
    )

  }

}
