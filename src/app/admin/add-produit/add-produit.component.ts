import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/models/produit';
import { CategorieService } from 'src/services/categorie.service';
import { ProduitService } from 'src/services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  files:any;
  imgUrl:any="https://static.remove.bg/remove-bg-web/36b50c4385f75bb65509f63b1e81f99fe2b334fc/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png";
  ListCategorie:any=[];
  cId:any;
  cTitre:any;
  produit = new Produit();
  categorieChoisi:any;
  constructor(private rout:Router ,private produitServ:ProduitService
    ,private cateServ:CategorieService) { }

  ngOnInit(): void {

    if(localStorage.getItem("tokenAdmin")==null){

      this.rout.navigate(["/homeAdmin"]);
    }
    // this.cId=localStorage.getItem('rId');
    else{
      if(localStorage.getItem('myPath')=="/categorie/produits-categorie/"+localStorage.getItem('rId')){
        this.cId=localStorage.getItem('rId');
      }
      // this.cId=null;
      this.getCategorie();
    }


  }
  imageUpload(event:any){
    // console.log(event);
    this.files= event.target.files[0];


    if (event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
       reader.onload = (event:any) => {
      this.imgUrl =  event.target.result;
      console.log(this.imgUrl);
   }
    }



    // console.log(this.files);
  }
  getCategorie(){
    this.cateServ.getDataCategorieApi().subscribe(
      result=>{
        this.ListCategorie=result;
        // console.log(result);
        if(this.cId!=null){
          for(let cate of this.ListCategorie){
            // console.log(cate);
              if(cate.id == this.cId){
                this.cTitre = cate.titre;
              }
          }
        }
      }
    );

  }
  selectCategorie(e:any){
    if(e.value==""){
      alert('not working');
    }
    else{
      this.categorieChoisi=e.value;
      console.log("salllam  ayoub : "+e.value);

  }


  }
  addProduit(){
    let formData =  new FormData();
    formData.append("nom",this.produit.nom);
    formData.append("description",this.produit.description);
    formData.append("image",this.files);
    formData.append("prix",this.produit.prix);
    if(this.cId!=null){
      formData.append("categorie_id",this.cId);
    }
    else{
      formData.append("categorie_id",this.categorieChoisi);
    }
    this.produitServ.ajouterProduit(formData).subscribe(
      res => {
        // console.log("test wach khadam");
        // console.log(res);
        this.rout.navigate([localStorage.getItem('myPath')]);
        localStorage.removeItem('rId');
      }

    )

  }
}
