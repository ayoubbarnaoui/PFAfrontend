import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/models/categorie';
import { CategorieService } from 'src/services/categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {
  categorieRouter = new Categorie();
  // categorie = new Categorie();
  // Returncategorie:any;
  // id:any;
  categorie:any;
  constructor(private rout:Router ,private cateServ:CategorieService) {
    const navigation:any = this.rout.getCurrentNavigation();//bach nakhdo data mn user comp
    // this.id=navigation.extras.id;
    
    this.categorie = navigation.extras;
  }

  ngOnInit(): void {
    if(localStorage.getItem("tokenAdmin")==null){

      this.rout.navigate(["/homeAdmin"]);
    }
    // this.categorie=localStorage.getItem('Returncategorie');
    // // this.categorie=localStorage.getItem('Returncategorie');
    // console.log(localStorage.getItem('Returncategorie'));
  }
  updateCategorie(){
        // this.userServ.editData(this.user).subscribe(
          this.cateServ.UpdateCategorieData(this.categorie).subscribe(
            res => {
               console.log("update mazzzzzzzzzzzzzzyan");
              // console.log(res);
              this.rout.navigate(["categories"]);
            }
          )
  }

}
