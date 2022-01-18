import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.css']
})
export class PrincipalViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLoginView() {
    this.router.navigate(['login']);
  }

}
