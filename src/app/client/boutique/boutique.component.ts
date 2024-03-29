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
  cartProduit:any[]=[];
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
  acheter(produit:any){
    //  console.log(JSON.parse(quantite));
    //  let produit=produit1+"quantite :"+quantite;
    localStorage.setItem("path", this.rout.url);

    // let quantite:any=1;
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
  getDetail(data:any){
    localStorage.setItem('produitDetail',JSON.stringify(data));
    console.log(data);
    this.rout.navigate(["produit/detail//",data.nom]);

 }
}
