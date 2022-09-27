import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ClientService } from 'src/services/client.service';
import { CommandeService } from 'src/services/commande.service';
import { LigneCommandeService } from 'src/services/ligne-commande.service';
import { ProduitService } from 'src/services/produit.service';


@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {
  listLigneCmd:any=[];
  listPLigne:any=[];
  client_id:any;
  commande_id:any;
  commande:any;
  listProduit:any=[];
  client:any=[];
  public imageDirectPath:any='http://127.0.0.1:8000/uploads/images/produits/';
  constructor(private rout:Router ,private ligneCmdServ:LigneCommandeService,
    private commServ:CommandeService,
    private clientServ:ClientService,private produitServ:ProduitService) { }

  ngOnInit(): void {
    if(localStorage.getItem("tokenAdmin")==null){

      this.rout.navigate(["/homeAdmin"]);
    }
    this.commande=JSON.parse(localStorage.getItem("commande")!);
    this.client_id=this.commande.client_id;
    this.commande_id=this.commande.id;
    this.getLigneCmd(this.commande_id);
    this.getAllProduit();
    this.getClients();
    // console.log(this.client_id);


  }

  getLigneCmd(id:any){
    this.ligneCmdServ.getLigneCmd(id).subscribe(
      result=>{
        this.listLigneCmd=result;
      }
    )
  }
  produitCommande(){
    let newList:any[]=[];
    for(let elm of this.listLigneCmd){
      for(let prd of this.listProduit)
        if(elm.produit_id==prd.id){
          elm.produit_nom=prd.nom;
          elm.produit_description=prd.description;
          elm.produit_image=prd.image;
          elm.produit_prix=prd.prix;
          newList.push(elm);
        }
    }
    this.listPLigne=newList;
    // console.log(this.listProduit);
  }
  getAllProduit(){

    this.produitServ.getAllProduit().subscribe(
    result=>{
        this.listProduit=result;
        this.produitCommande();
    });
  }


  getClients(){
    this.clientServ.getclients().subscribe(
      result=>{
        // console.log(result);
        for(let elm of result){
          if(elm.id==this.client_id){
            // console.log(elm);
            this.client=elm;
            // console.log(this.client)
          }
        }
      }
    )
  }
  suppCommande(data:any){
    this.commServ.suppCommande(data.id).subscribe(
      sr=>{

        console.log("supp vrai");
        this.suppClient(data.client_id);
        localStorage.removeItem('commande');
        this.rout.navigate(["commande/"]);
      }
    );
    this.ngOnInit();
  }
  suppClient(id:any){
    this.clientServ.suppClient(id).subscribe(
      sr=>{
        console.log("supp vrai")
      }
    );
    // this.ngOnInit();
  }

}
