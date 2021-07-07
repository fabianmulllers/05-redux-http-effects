import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import * as usuarioActions from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit, AfterViewInit{
  
  usuario!: Usuario;
  loading: boolean = false;
  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
    // private usuariosService: UsuarioService
  ) { }
  
  ngOnInit(): void {
    
    this.store.select('usuario')
    .pipe(
      // filter( usuario => usuario.user != null),
    )
    .subscribe( ({user, loading, error} ) => { 
        this.usuario = user!; 
        console.log( this.usuario ) 
        this.loading = loading;
      })
        
    
    this.router.params.subscribe( ({ id }) => {
      
      this.store.dispatch( usuarioActions.cargarUsuario( { id : id } ) )
      
    } ); 
    
  }
  
  ngAfterViewInit(): void {

    
    
  }



}
