import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  
  @ViewChild('txtInput') txtInput = ElementRef
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  

  irUsuario( id: string){

      if( !id )
        return;

      this.router.navigate(['/usuario',id])   
  }
}
