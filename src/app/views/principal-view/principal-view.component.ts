import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.css']
})
export class PrincipalViewComponent implements OnInit {

  id = 1;

  constructor(
    private router: Router, 
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.queryParams.subscribe(params => {
      console.log(params['op']);
    })
  }

  goToLoginView() {
    this.router.navigate(['admin/1'], {queryParams: {op: 'nombre'}});
  }

}
