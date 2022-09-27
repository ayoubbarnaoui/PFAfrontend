import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/models/client';
import { Produit } from 'src/models/produit';
import { ClientService } from 'src/services/client.service';
import { CommandeService } from 'src/services/commande.service';
import { LigneCommandeService } from 'src/services/ligne-commande.service';
import * as moment from 'moment';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  public imageDirectPath:any='http://127.0.0.1:8000/uploads/images/produits/';
   listProduit:any[] = [];
   produit:any;
   total:any=0;
   len:any;
   affiche:boolean=false;
   client = new Client();
   clientId:any;
   commandeId:any;
   success:boolean=false;
  constructor(private rout:Router,private clientServ:ClientService
    ,private commandeServ:CommandeService,
    private ligneCmdServ:LigneCommandeService) {
   }

  ngOnInit(): void {
    this.listProduit=JSON.parse(localStorage.getItem("cart")!);
    this.getTotal();
    this.nombreProduit();
  }

  goBoutique(){
    let path =localStorage.getItem('path');
    if(path){
    this.rout.navigate([path]);
    localStorage.removeItem('path');
    }else{
      this.rout.navigate(["boutique"]);
    }
  }
  supprimer(id:any){
    let list:any;
    let listPrd:any[]=[];
    list=JSON.parse(localStorage.getItem("cart")!);
    for( let elm of list){
      if(elm.id==id){
        continue;
      }
      else{
        listPrd.push(elm);
      }

    }
    localStorage.removeItem("cart");
    localStorage.setItem("cart",JSON.stringify(listPrd));
    this.ngOnInit();
  }
  increment(id:any){

    let listPrd:any[]=[];
    let list:any;
    list=JSON.parse(localStorage.getItem("cart")!);
    for( let elm of list){
      if(elm.id==id){
        elm.quantite++;
        // this.listNewProduit.push(elm);
      }
      // else{
        listPrd.push(elm);
      // }
    }
    localStorage.removeItem("cart");
    localStorage.setItem("cart",JSON.stringify(listPrd));
    this.ngOnInit();
  }
  decrement(id:any){
    let listPrd:any[]=[];
    let list:any;
    list=JSON.parse(localStorage.getItem("cart")!);
    for( let elm of list){
      if(elm.id==id && elm.quantite >=2){
        elm.quantite--;
        // this.listNewProduit.push(elm);
      }
      // else{
        listPrd.push(elm);
      // }

    }
    localStorage.removeItem("cart");
    localStorage.setItem("cart",JSON.stringify(listPrd));
    this.ngOnInit();
  }
  getTotal(){
      this.total=0;
      if(this.listProduit==null){
        return;
      }
      else{
        for(let i of this.listProduit){
          this.total=this.total + i.quantite * i.prix;
      }

      }

  }
  suppAllProduits(){

    localStorage.removeItem("cart");
    this.ngOnInit();
  }
  nombreProduit(){
    if(this.listProduit==null){
      this.len=0;
    }
    else{
        this.len=this.listProduit.length;
    }
  }
  detectChange(){
    localStorage.setItem("cart",JSON.stringify(this.listProduit));
    this.ngOnInit();
  }
  valider(){
    this.affiche=true;
    this.ngOnInit();
  }
  public addClient(){

      this.clientServ.insertclient(this.client).subscribe(
        res => {
          // this.getCategorie();
          this.clientId=res.id;
          // console.log(res.id);
          this.addCommande();


        }
      );
  }
  public  addCommande(){

    let formData =  new FormData();
    formData.append("client_id",this.clientId);
    formData.append("prix_total",this.total);

   formData.append("date",moment().format("Y-M-D HH:mm:ss A").toString());
    this.commandeServ.insertcommande(formData).subscribe(
      res => {
          this.commandeId=res.id;
          this.addLigneCommande();
          this.suppAllProduits();
          this.affiche=false;
          this.success=true;
      }
    );
}
public addLigneCommande(){

  for( let elm of this.listProduit){
    let formData =  new FormData();
    formData.append("produit_id",elm.id);
    let prix_total= elm.quantite * elm.prix;
    formData.append("prix_total", prix_total.toString());
    formData.append("commande_id",this.commandeId);
    formData.append("quantite",elm.quantite);
    this.ligneCmdServ.insertligneCommande(formData).subscribe(
      res => {
          // this.commandeId=res.id;
          console.log(res)
      }
    );
  }
  }

}
