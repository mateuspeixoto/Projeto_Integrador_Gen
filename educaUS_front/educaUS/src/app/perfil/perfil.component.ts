import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      alert('Sua sessão expirou, faça login novamente!')
      this.router.navigate(['/entrar'])
    }
  }

}
