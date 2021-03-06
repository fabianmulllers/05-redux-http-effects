import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosInterface, Data } from '../interfaces/usuarios.interface';
import { map } from 'rxjs/operators'
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private url = `https://reqres.in/api`;

  constructor(
    private http: HttpClient
  ) { }
  

  getUsers(): any{
    return this.http.get<UsuariosInterface>(`${ this.url }/users?per_page=6&delay=3`).pipe(
      map( (resp ) => resp.data )
    );
  }

  getUserByid( id: string): any{
    return this.http.get<UsuariosInterface>(`${ this.url }/users/${ id }`).pipe(
      map( (resp ) => resp.data )
    );
  }
}
