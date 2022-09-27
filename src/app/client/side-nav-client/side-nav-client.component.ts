import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/models/categorie';
import { CategorieService } from 'src/services/categorie.service';
import { ProduitService } from 'src/services/produit.service';

@Component({
  selector: 'app-side-nav-client',
  templateUrl: './side-nav-client.component.html',
  styleUrls: ['./side-nav-client.component.css']
})
export class SideNavClientComponent implements OnInit {
  public listCategorie:any =[];
  // categorie =  new Categorie();

  constructor(private rout:Router ,private cateServ:CategorieService) { }

  ngOnInit(): void {
    this.getCategorie();

  }
  getCategorie(){
    this.cateServ.getDataCategorieApi().subscribe(
      result=>{
        this.listCategorie=result;
        // console.log(result);
      }
    )
  }

  produitsCategorie(data:any){

    localStorage.setItem("id", data.id);
    localStorage.setItem("titre", data.titre);
    localStorage.setItem("description", data.description);
    this.rout.navigate(["boutique/",data.titre]);

    // console.log(Returncategorie);
  }
}
