import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import * as usuarioActions from "../actions";
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { of } from "rxjs";


@Injectable()
export class UsuarioEffects {
    
    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}
    

    cargarUsuario$ = createEffect(
        ():any  => this.actions$.pipe(
                ofType( usuarioActions.cargarUsuario ),
                mergeMap( 
    
                    ( action ) => this.usuarioService.getUserByid( action.id )
                        .pipe(
                            map( ( usuario: Usuario  ) => usuarioActions.cargarUsuarioSuccess( { usuario: usuario } ) ),
                            catchError( error => of( usuarioActions.cargarUsuarioError({ payload: error }) ) )
                        )
                )
            )
    );



}