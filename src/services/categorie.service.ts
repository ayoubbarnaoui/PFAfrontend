import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }

  public getDataCategorieApi(){
    //  return this.http.get<any>("https://jsonplaceholder.typicode.com/users");

    return this.http.get<any>("http://localhost:8000/api/categories");
  }
  public suppCategorie(id:any){
    return this.http.get<any>("http://localhost:8000/api/categorie/delete/"+id);
  }
  public insertcategorie(data:any){
    return this.http.post<any>("http://localhost:8000/api/categorie/add",data);
  }
  public UpdateCategorieData(data:any){
    return this.http.post<any>("http://localhost:8000/api/categorie/update/"+data.id,data);
  }

}
