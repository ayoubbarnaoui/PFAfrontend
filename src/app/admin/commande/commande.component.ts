import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/services/client.service';
import { CommandeService } from 'src/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  public listCommande:any[] =[];

  constructor(private rout:Router ,private commServ:CommandeService,
    private clientServ:ClientService
    ) { }

  ngOnInit(): void {
    if(localStorage.getItem("tokenAdmin")==null){

      this.rout.navigate(["/homeAdmin"]);
    }
    this.getCommandes();
    localStorage.removeItem("commande");
  }

  getCommandes(){
    this.commServ.getAllCommande().subscribe(
      result=>{
        this.listCommande=result;

      }
    )
  }
  getClient(){
    this.clientServ.getclients().subscribe(
      result=>{
      }
    )
  }

  getDetail(data:any){
    this.rout.navigate(["commande/detail"],data.id);
    localStorage.setItem("commande",JSON.stringify(data));
  }

  suppCommande(data:any){
    this.commServ.suppCommande(data.id).subscribe(
      sr=>{

        console.log("supp vrai");
        this.suppClient(data.client_id);
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
    this.ngOnInit();
  }

}
