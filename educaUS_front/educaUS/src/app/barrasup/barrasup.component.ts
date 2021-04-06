import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-barrasup',
  templateUrl: './barrasup.component.html',
  styleUrls: ['./barrasup.component.css']
})
export class BarrasupComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  sair(){
    this.router.navigate(['/home'])
    environment.token=''
    environment.id=0
    environment.nomeUsuario=''
    environment.foto=''
    environment.email=''
  }

}
