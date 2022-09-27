import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }

  public insertcommande(data:any){
    return this.http.post<any>("http://localhost:8000/api/add/commande",data);
  }
  public getAllCommande(){
    return this.http.get<any>("http://localhost:8000/api/commandes/");
  }
  public suppCommande(id:any){
    return this.http.get<any>("http://localhost:8000/api/commande/delete/"+id);
  }
}
