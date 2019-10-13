import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { localStorageAccess } from '../../lib/localStorageAccess';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService,private userService : UserService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.userService.getTabs();
        localStorageAccess.setObject("UserLogged",{username : this.username})
        setTimeout(() => {
          this.router.navigate(['home'])
        }, 10);
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
      }
    )   
 }
}
