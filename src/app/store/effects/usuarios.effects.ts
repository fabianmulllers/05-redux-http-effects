import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import * as usuariosActions from "../actions";
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { of } from "rxjs";


@Injectable()
export class UsuariosEffects {
    
    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}
    

    cargarUsuarios$ = createEffect(
        ():any  => this.actions$.pipe(
                ofType( usuariosActions.cargarUsuarios ),
                tap( data => console.log( 'effect tap',data )),
                mergeMap( 
    
                    () => this.usuarioService.getUsers()
                        .pipe(
                            map( ( usuarios:Usuario[] ) => usuariosActions.cargarUsuariosSuccess( { usuarios: usuarios } ) ),
                            catchError( error => of( usuariosActions.cargarUsuariosError({ payload: error }) ) )
                        )
                )
            )
    );



}