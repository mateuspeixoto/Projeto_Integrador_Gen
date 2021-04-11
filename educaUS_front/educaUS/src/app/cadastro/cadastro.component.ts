import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User
  confirmSenha: string

  constructor(
    private auth: AuthService,
    private router: Router,
    private alert: AlertasService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value
  }

  cadastrar() {

    let usuario: boolean = true
    let email: boolean = true 

    if (this.user.nomeUsuario.length < 5) {
      usuario = false
      this.alert.showAlertDanger('Nome de usuario inválido! Insira no minimo 5 caracteres!')
    }

    else if (this.user.email.indexOf('@')  == -1 || this.user.email.indexOf('.com') == -1 ){
      email = false 
      this.alert.showAlertDanger('Email inválido!')
    }


    else if (this.user.senha != this.confirmSenha) {
      this.alert.showAlertDanger('As senhas não coincidem!')
    }

    else {
      this.auth.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    }

  }




}
