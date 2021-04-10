import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-barrasup',
  templateUrl: './barrasup.component.html',
  styleUrls: ['./barrasup.component.css']
})
export class BarrasupComponent implements OnInit {

      token = environment.token


  constructor( private router:Router) { }

  ngOnInit() {
    window.scroll(0, 0)
    
  }

  sair(){
    environment.token=''
    environment.id=0,
    environment.token='',
    environment.nome='',
    environment.nomeUsuario='',
    environment.email='',
    environment.fotoPerfil='',
    environment.fotoCapa=''
    this.router.navigate(['/entrar'])
  }

}
