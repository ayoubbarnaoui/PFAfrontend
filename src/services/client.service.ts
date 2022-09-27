import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  public insertclient(data:any){
    return this.http.post<any>("http://localhost:8000/api/add/client",data);
  }

  public getclients(){
    return this.http.get<any>("http://localhost:8000/api/clients/");
  }

  public suppClient(id:any){
    return this.http.get<any>("http://localhost:8000/api/client/delete/"+id);
  }
}
