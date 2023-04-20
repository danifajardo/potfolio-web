import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marco-proyectos',
  templateUrl: './marco-proyectos.component.html',
  styleUrls: ['./marco-proyectos.component.css']
})
export class MarcoProyectosComponent implements OnInit{

  links_iconos:any = [{
    link: '',
    tag: ''
  }];

  constructor(){}

  ngOnInit(): void {

  }
}
