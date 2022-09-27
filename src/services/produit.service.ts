import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  public getProduitCategorie(id:any){
    return this.http.get<any>("http://localhost:8000/api/categories/produits/"+id);
  }
  public getAllProduit(){
    return this.http.get<any>("http://localhost:8000/api/produits/");
  }

  public ajouterProduit(data:any){
    return this.http.post<any>("http://localhost:8000/api/produit/add",data);
  }
  public suppProduit(id:any){
    return this.http.get<any>("http://localhost:8000/api/produit/delete/"+id);
  }
  public getProduit(id:any){
    return this.http.get<any>("http://localhost:8000/api/produit/"+id);
  }
  public modifierProduit(data:any){
    // console.log(data.getAll('id'));
    // console.log(data.getAll('nom'));
    // console.log(data.getAll('description'));
    // console.log(data.getAll('image'));
    // console.log(data.getAll('prix'));
    // console.log(data.getAll('categorie_id'));
    return this.http.post<any>("http://localhost:8000/api/produit/update/"+data.id,data);
  }
  // public test(data:any){
  //   console.log(data);
  // }
}
