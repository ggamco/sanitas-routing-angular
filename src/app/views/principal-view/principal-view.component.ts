import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.css']
})
export class PrincipalViewComponent implements OnInit {

  id = 1;
  localDataStorage: DataStorageService

  constructor(
    private router: Router, 
    private activedRoute: ActivatedRoute,
    private dataStorage: DataStorageService
  ) {
      this.localDataStorage = dataStorage;
   }

  ngOnInit(): void {
    this.activedRoute.queryParams.subscribe(params => {
      console.log(params['op']);
    })
  }

  goToLoginView() {
    this.dataStorage.message = "hola data storage";

    this.router.navigate(['admin/1'], {queryParams: {op: 'nombre'}});
  }

}
