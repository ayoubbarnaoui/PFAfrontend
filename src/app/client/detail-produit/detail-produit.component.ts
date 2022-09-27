import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/services/produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  cartProduit:any[]=[];
  public imageDirectPath:any='http://127.0.0.1:8000/uploads/images/produits/';
  produit:any;
  constructor(private rout:Router
    ,private produitServ:ProduitService) { }

  ngOnInit(): void {
    this.produit=JSON.parse(localStorage.getItem('produitDetail')!);
  }
  acheter(produit:any){
    localStorage.setItem("path", this.rout.url);
    produit["quantite"]=1;
    if("cart" in localStorage){
      this.cartProduit=JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProduit.find(item => item.id == produit.id)
      if(exist){
        alert("le produit est deja exist");
      }else{
      this.cartProduit.push(produit);
      localStorage.setItem("cart",JSON.stringify(this.cartProduit ));
      this.rout.navigate(["boutique/cart/shoping"]);
      }
    }
    else{
      this.cartProduit.push(produit);
      localStorage.setItem("cart",JSON.stringify(this.cartProduit));
      this.rout.navigate(["boutique/cart/shoping"]);
    }
  }
}
