import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  messageFromData?: string;

  constructor(
    private activedRoute: ActivatedRoute,
    private dataStorage: DataStorageService
    ) { }

  ngOnInit(): void {
    console.log(this.activedRoute.snapshot.paramMap.get('id'));
    console.log(this.activedRoute.snapshot.paramMap.get('name'));
    
    this.activedRoute.queryParams.subscribe(params => {
      console.log(params['op'])
    })

    this.messageFromData = this.dataStorage.message;
  }

}
