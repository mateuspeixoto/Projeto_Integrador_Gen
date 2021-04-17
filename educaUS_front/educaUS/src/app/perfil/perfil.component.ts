import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-menu',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user: User = new User()
  tema: Tema = new Tema()
  postagem: Postagem = new Postagem()
  idUser: number
  confirmSenha: string
  postagemUser: Postagem[]
  listaPostagem: Postagem[]
  idActive = environment.id
  idTema: number
  idPost: number
  listaTema: Tema[]
  key= 'postdate'
  reverse = true


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private authService: AuthService,
    private alert: AlertasService,
  ) { }

  ngOnInit() {

    this.findAllPostagem()

    window.scroll(0, 0)
    if (environment.token == '') {
      this.alert.showAlertInfo('Sua sessão expirou, faça login novamente!')
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.idUser = id
    this.findByIdUser()
    this.idPost = id
    this.findByIdPostagem(this.idPost)
    this.findAllTema()

  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  /*CONFIRMAR SENHA*/

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value
  }

  /*ATUALIZAR DADOS USUARIO*/

  atualizar() {

    this.user.postagem = this.postagemUser

    let usuario: boolean = true
    let email: boolean = true

    if (this.user.nomeUsuario.length < 5) {
      usuario = false
      this.alert.showAlertDanger('Nome de usuario inválido! Insira no minimo 5 caracteres!')
    }

    else if (this.user.email.indexOf('@') == -1 || this.user.email.indexOf('.com') == -1) {
      email = false
      this.alert.showAlertDanger('Email inválido!')
    }

    else if (this.user.senha != this.confirmSenha) {
      this.alert.showAlertDanger('As senhas não coincidem!')
    }

    else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        this.alert.showAlertSuccess('Usuario atualizado com sucesso! Faça login novamente')
        environment.token = ''
        environment.id = 0
        environment.fotoCapa = ''
        environment.fotoPerfil = ''
        environment.email = ''
        environment.nomeUsuario = ''
        environment.nome = ''
      })
    }

  }

  /*METODOS TEMA*/

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  findAllTema() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  /*POSTAGEM*/

  novoPost(){
    this.postagem = new Postagem()
  }

  findAllPostagem() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
    })
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.temas = this.tema
    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alert.showAlertSuccess('Postagem realizada com sucesso!')
      this.findAllPostagem()
      this.postagem = new Postagem()
    })

  }

  editarPost() {
    this.tema.id = this.idTema
    this.postagem.temas = this.tema
    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alert.showAlertSuccess('Postagem alterada com sucesso!')
      this.findAllPostagem()
      this.postagem = new Postagem()
    })

  }

  deletarPost() {
    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.postagemService.delete(id).subscribe(() => {
      this.alert.showAlertInfo('Postagem deletada com sucesso!')
      this.findAllPostagem()
      this.postagem = new Postagem()
    })
  }

}
