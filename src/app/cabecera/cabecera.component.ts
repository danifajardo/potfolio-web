import { Component, OnInit } from '@angular/core';
import { FormularioContactoComponent } from '../formulario-contacto/formulario-contacto.component';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})

export class CabeceraComponent implements OnInit{

  links:any = ['Más sobre mí', 'Proyectos', 'Contactame'];

  ngOnInit(): void {

  }

  abrirFormulario(){
    const formulario = document.getElementById("ModalContacto");
    if (formulario != null){
      formulario.style.display = 'block';
    }
  }

  cerarFormulario(){
    const formulario = document.getElementById("ModalContacto");
    if (formulario != null){
      formulario.style.display = 'none';
    }
  }

  abrirInfo(){
    const info = document.getElementById("ModalInfo");
    if (info != null){
      info.style.display = 'block';
    }
  }

  cerarInfo(){
    const info = document.getElementById("ModalInfo");
    if (info != null){
      info.style.display = 'none';
    }
  }


}
