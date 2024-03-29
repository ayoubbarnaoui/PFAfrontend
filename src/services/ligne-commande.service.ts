import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  constructor(private http:HttpClient) { }

  public insertligneCommande(data:any){
    return this.http.post<any>("http://localhost:8000/api/add/ligneCommande",data);
  }

  public getLigneCmd(id:any){
    return this.http.get<any>("http://localhost:8000/api/ligneCommandes/"+id);
  }
}
