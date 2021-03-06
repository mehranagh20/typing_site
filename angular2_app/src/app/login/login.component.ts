import {Component, OnInit, Input} from '@angular/core';
import {User} from '../user'
import {AuthenticationService} from '../authentication.service'
import {userInfo} from "os";
import {Http, Response} from "@angular/http";
import {Routes, Router} from '@angular/router'
import {forEach} from "@angular/router/src/utils/collection";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  emailPat: string = "^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$";
  isAlreadyLoggedIn: boolean;
  loading: boolean;
  globErrors = [];

  constructor(private authenticationService: AuthenticationService, private http: Http, private route: Router, private snackbar: MdSnackBar) {}

  dologin() {
    this.loading = true;
    this.globErrors = [];
    this.authenticationService.login(this.user.email, this.user.password).subscribe(
      data => {
        if(data['status'] == 200) {
          localStorage.setItem('user', JSON.stringify({'email': data['email'], 'username': data['username']}));
          // this.route.navigate(['/']);
          // location.reload();
          console.log(this.authenticationService.redirectUrl);
          if(this.authenticationService.redirectUrl)
            this.route.navigate([this.authenticationService.redirectUrl]);
          else
            this.route.navigate(['/']);
          location.reload();
        }
        else {
          this.globErrors = [data['message']];
          this.loading = false;
        }
      },
      errors => {
        this.globErrors = [];
        this.loading = false;
        console.log(errors);
        this.snackbar.open("Problem communicating with server, check connection", "Failed", {duration: 5000});
      }
    );
  }

  setcol(name: any) {
    if(name.valid) return "primary";
    return "warn";
  }

  ngOnInit() {
    // let user = localStorage.getItem('user');
    if(this.authenticationService.is_user_logged_in())
      this.route.navigate(['/']);
    else this.isAlreadyLoggedIn = false;
  }

}
