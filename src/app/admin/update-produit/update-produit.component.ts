import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/models/produit';
import { CategorieService } from 'src/services/categorie.service';
import { ProduitService } from 'src/services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  ListCategorie:any=[];
  cIdSelected:any;
  cTitreSelected:any;
  produit = new Produit();
  categorieChoisi:any;
  files:any;
  public imageDirectPath:any='http://127.0.0.1:8000/uploads/images/produits/';
  imgUrl:any;
  id:any;
  // myGroup:any;
  constructor(private rout:Router ,private produitServ:ProduitService,
    private http:HttpClient, private cateServ:CategorieService) {
      const navigation:any = this.rout.getCurrentNavigation();
      this.id=navigation.extras.id;
      this.produit = navigation.extras;
      this.imgUrl=this.imageDirectPath+navigation.extras.image;
      // this.files.getFile(this.imgUrl);
      // this.files=this.imgUrl.target.files[0]
      // console.log(this.files.files[0]);
      this.cIdSelected=navigation.extras.categorie_id;
      this.categorieChoisi=navigation.extras.categorie_id;
    }

  ngOnInit(): void {
    if(localStorage.getItem("tokenAdmin")==null){

      this.rout.navigate(["/homeAdmin"]);
    }
    this.getCategorie();
  }
  imageUpload(event:any){
    // console.log(event);
    this.files= event.target.files[0];
    console.log(this.files);

    if (event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
       reader.onload = (event:any) => {
      this.imgUrl =  event.target.result;
      // console.log(this.imgUrl);
   }
    }
    // console.log(this.files);
  }

  getCategorie(){
    this.cateServ.getDataCategorieApi().subscribe(
      result=>{
        this.ListCategorie=result;

          for(let cate of this.ListCategorie){
                if(cate.id==this.cIdSelected){
                  this.cTitreSelected=cate.titre;


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
  updateProduit(){

    let formData = new FormData();
    // formData  =  this.myGroup;

    formData.append("id",this.id);
    formData.append("nom",this.produit.nom);
    formData.append("description",this.produit.description);
    formData.append("prix",this.produit.prix);
    if(this.files!=null){
      formData.append("image",this.files);
    }
    formData.append("categorie_id",this.categorieChoisi);
      // console.log(formData);
      // console.log(formData.get('id'));
        this.produitServ.modifierProduit(formData).subscribe(
      res => {
        this.rout.navigate([localStorage.getItem("myPath")]);
         console.log("update mazzzzzzzzzzzzzzyan");
        // console.log(res);
      }
    )

  }
}
