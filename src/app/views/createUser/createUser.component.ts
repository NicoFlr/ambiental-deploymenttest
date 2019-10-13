import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createUser',
  templateUrl: './createUser.component.html',
  styleUrls: ['./createUser.component.scss']
})
export class CreateUserComponent implements OnInit {

  userData = {
    name: null,
    username: null,
    password: null,
    passwordConfirm: null,
    email: null,
    phone: null,
    ci: null,
    address: null,
    role: ['user']
  }

  constructor(private _location: Location, private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  goBackLastPage() {
    this._location.back();
  }

  createUser() {
    this.httpService.post('api/auth/signup', this.userData).subscribe(response => {
      console.log("==================================");
      console.log(response);
      this.router.navigateByUrl('/home');
    }, error => console.log(error));
  }
  
}
