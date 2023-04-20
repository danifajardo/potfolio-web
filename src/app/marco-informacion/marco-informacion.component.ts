import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marco-informacion',
  templateUrl: './marco-informacion.component.html',
  styleUrls: ['./marco-informacion.component.css']
})
export class MarcoInformacionComponent implements OnInit {

  links:Array<modeloLink> = [
    {
      link: 'https://github.com/danifajardo',
      icono: '<i class="uil uil-github-alt"></i>'
    },
    {
      link: 'mailto:dfajardovargas@gmail.com',
      icono: '<i class="uil uil-envelope"></i>'
    },
    {
      link: 'https://www.linkedin.com/in/daniel-felipe-fajardo-vargas-66130b166/',
      icono: '<i class="uil uil-linkedin"></i>'
    }
  ];

  ngOnInit(): void {

  }
}

class modeloLink{
  link!:string;
  icono!:string;
}
