import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/models/categorie';
import { CategorieService } from 'src/services/categorie.service';

@Component({
  selector: 'app-show-categorie',
  templateUrl: './show-categorie.component.html',
  styleUrls: ['./show-categorie.component.css']
})
export class ShowCategorieComponent implements OnInit {
  public listCategorie:any =[];
  public show:boolean=false;
   categorie =  new Categorie();

  constructor(private rout:Router ,private cateServ:CategorieService) {

   }

  ngOnInit(): void {
    if(localStorage.getItem("tokenAdmin")==null){
      console.log("categories"+localStorage.getItem("tokenAdmin"));
      this.rout.navigate(["/login"]);
    }
    this.getCategorie();
  }
  getCategorie(){
    this.cateServ.getDataCategorieApi().subscribe(
      result=>{
        this.listCategorie=result;
        console.log(result);
      }
    )
  }
  deleteCategorie(id:any){
    this.cateServ.suppCategorie(id).subscribe(
      sr=>{
        console.log("supp vrai")
      }
    );
    this.getCategorie();

  }
  public showAdd(){
      this.show=true;
  }
  public cancelAdd(){
    this.show=false;
    this.categorie.titre="";
    this.categorie.description="";
  }
  public addCategorie(){
    // console.log(this.categorie);

      this.cateServ.insertcategorie(this.categorie).subscribe(
        res => {
          // console.log("test wach khadam");
          console.log(res);
          this.getCategorie();
          this.show=false;
          this.categorie.titre="";
          this.categorie.description="";
        }
      );


  }
  updateCategorie(Returncategorie:any,id:any){
    this.rout.navigate(["categorie/update-categorie/",id],Returncategorie);
    console.log(Returncategorie);
    // localStorage.setItem("Returncategorie", Returncategorie);
    // console.log(localStorage.getItem('Returncategorie'));
    // this.rout.navigate(["categorie/update-categorie/",id]);
    // console.log(Returncategorie);
  }
  produitsCategorie(id:any){

    localStorage.setItem("id", id);
    this.rout.navigate(["categorie/produits-categorie/",id]);
    // console.log(Returncategorie);
  }
}
