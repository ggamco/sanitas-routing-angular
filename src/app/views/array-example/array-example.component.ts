import { Component, OnInit } from '@angular/core';
import { Usuario } from './data/usuario';

@Component({
  selector: 'app-array-example',
  templateUrl: './array-example.component.html',
  styleUrls: ['./array-example.component.css']
})
export class ArrayExampleComponent implements OnInit {
  
  data: Usuario[]
  
  constructor() { 
    this.data = [
      new Usuario("jhon", "doe", "jhon.doe@email.com", "666444555"),
      new Usuario("mike", "sulivan", "mike@email.com", "666111000"),
      new Usuario("peter", "parker", "peter@email.com", "777666555"),
      new Usuario("jhon", "smith", "smith@email.com", "999888777"),
    ]
  }

  ngOnInit(): void {
  }

}
