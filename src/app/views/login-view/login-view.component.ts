import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  email = "";
  password = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const validUser = "asd";
    const validPass = "dsa";

    if(this.email === validUser && this.password === validPass) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['error']);
    }
  }

}
