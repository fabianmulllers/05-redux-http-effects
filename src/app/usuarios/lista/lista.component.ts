import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { Data } from '../../interfaces/usuarios.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as usuariosActions from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {


  usuarios : Usuario[] = [];
  loading  : boolean = false;
  error    : any;

  constructor(
    // private usuarioService: UsuarioService
    private store:Store <AppState>
  ) { }

  ngOnInit(): void {

    // this.usuarioService.getUsers().subscribe( ( users: Usuario[] )  =>{
    //   console.log( users )
    //   this.usuarios = users;
    // })
    
    this.store.select('usuarios')
        .subscribe( ({users, loading, error})=> {
          this.usuarios = users;
          this.loading = loading;
          this.error = error
        });

    this.store.dispatch( usuariosActions.cargarUsuarios() )
  }



}
