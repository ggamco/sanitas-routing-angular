import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  email = "";
  password = "";

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    const validUser = "asd";
    const validPass = "dsa";

    if(this.email === validUser && this.password === validPass) {
      alert("Login ok");
    } else {
      alert("login fail")
    }
  }

}
