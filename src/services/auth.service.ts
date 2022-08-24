import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public loginFunc(data:any){
    console.log('fonction login en service')
    return this.http.post<any>("http://localhost:8000/api/auth/login",data);
  }


  public logoutFunc(){
    // console.log('fonction login en service');
    localStorage.removeItem("tokenUser");
    const headers =new HttpHeaders({
       'Authorization':'Bearer ${localStorage.getItem(key: "tokenUser")}'

    });
    return this.http.post<any>("http://localhost:8000/api/logout",{headers:headers});
  }


}
