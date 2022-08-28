import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/services/produit.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  produitList:any =[];
  public imageDirectPath:any='http://127.0.0.1:8000/uploads/images/produits/';
  constructor(private rout:Router
    ,private produitServ:ProduitService) { }

  ngOnInit(): void {
    this. getProduits();
  }
  getProduits(){
    this.produitServ.getAllProduit().subscribe(
      result=>{
        this.produitList=result;
        console.log(result);
      }
    )
  }

}
