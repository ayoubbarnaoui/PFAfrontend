import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/services/categorie.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  public listCategorie:any =[];
  constructor(private rout:Router ,private cateServ:CategorieService) { }

  ngOnInit(): void {
    if(localStorage.getItem("tokenAdmin")==null){
      console.log("homeAdmin  :"+localStorage.getItem("tokenAdmin"));
      this.rout.navigate(["/login"]);
    }
    // this.getCategorie();
  }

  // getCategorie(){
  //   this.cateServ.getDataCategorieApi().subscribe(
  //     result=>{
  //       this.listCategorie=result;
  //       console.log(result);
  //     }
  //   )
  // }

}
