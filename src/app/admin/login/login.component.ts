import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/models/admin';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin =new Admin();
  constructor(private rout:Router ,private authServ:AuthService) { }

  ngOnInit(): void {

  }



  public login() {
    this.authServ.loginFunc(this.admin).subscribe(
      res => {
        // console.log("test wach khadam");
      //  if(res.admin) {console.log(res.admin);
        // Admin.log=true;
        // localStorage.setItem("token", res.token);
        // this.rout.navigate(["/user/update-user"]);
        localStorage.setItem("tokenAdmin", res.token);
        console.log(localStorage.getItem("tokenAdmin"));
        this.rout.navigate(["/homeAdmin"]);
      }
      //  else{console.log('ce user n\'existe pas');}
      // }
    )
  }

}
