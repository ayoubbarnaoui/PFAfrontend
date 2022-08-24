import { Component, OnInit } from '@angular/core';
// import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {

  constructor(private rout:Router) { }

  ngOnInit(): void {
    

  }
  logout(){

    localStorage.removeItem("tokenAdmin");
    console.log("this is token "+localStorage.getItem("tokenAdmin"))
    this.rout.navigate(["/login"]);
    // this.authServ.logoutFunc().subscribe(
    //   res => {
    //     this.rout.navigate(["/user"]);
    //   }
    // )
  }

}
