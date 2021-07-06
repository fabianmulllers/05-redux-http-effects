import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { Data } from '../../interfaces/usuarios.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {


  usuarios: Usuario[] = []

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {

    this.usuarioService.getUset().subscribe( ( users: Usuario[] )  =>{
      console.log( users )
      this.usuarios = users;
      // this.usuarios = users;
      // this.usuarios = [{id:2,first_name:'asas',last_name:'asas',avatar:'23'},{id:2,first_name:'asas',last_name:'asas',avatar:'23'}];
      // console.log( this.usuarios )
    })
  }



}
