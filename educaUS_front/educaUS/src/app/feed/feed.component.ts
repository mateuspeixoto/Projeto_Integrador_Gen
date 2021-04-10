import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl:'./feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()
  user: User = new User()
  fotoPerfil = environment.fotoPerfil
  nome = environment.nome
  nomeUsuario = environment.nomeUsuario
  idUser = environment.id
  confirmSenha: string
  like = 0

  listaTema: Tema[]
  idTema: number
  listaPostagem: Postagem[]

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private temaService: TemaService,
    private postagemService: PostagemService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      alert('Sua sessão expirou, faça login novamente!')
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)

    this.findAllPostagem()
    this.findByIdUser(this.idUser)

  }

  /*ENCONTRAR USUARIO*/

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

  /*CONFIRMAR SENHA*/

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value
  }

  /*ATUALIZAR DADOS USUARIO*/

  atualizar() {

    let usuario: boolean = true
    let email: boolean = true

    if (this.user.nomeUsuario.length < 5) {
      usuario = false
      alert('Nome de usuario inválido! Insira no minimo 5 caracteres!')
    }

    else if (this.user.email.indexOf('@') == -1 || this.user.email.indexOf('.com') == -1) {
      email = false
      alert('Email inválido!')
    }

    else if (this.user.senha != this.confirmSenha) {
      alert('As senhas não coincidem!')
    }

    else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuario atualizado com sucesso! Faça login novamente')
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

  findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  /*POSTAGEM*/

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
    this.postagem.tema = this.tema
    this.user.id = this.idUser
    this.postagem.usuario = this.user
    
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.findAllPostagem()
      this.postagem = new Postagem()
    })

  }

}
