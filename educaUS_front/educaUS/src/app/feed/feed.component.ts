import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postagem: Postagem = new Postagem()
  postagemUser: Postagem[]
  tema: Tema = new Tema()
  user: User = new User()
  fotoPerfil = environment.fotoPerfil
  nome = environment.nome
  nomeUsuario = environment.nomeUsuario
  idUser = environment.id
  idTema: number
  confirmSenha: string
  listaTema: Tema[]
  listaPostagem: Postagem[]
  key = 'postdate'
  keyTema = 'id'
  reverse = true
  descricaoPost: string

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private alert: AlertasService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.alert.showAlertInfo('Sua sessão expirou, faça login novamente!')
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.findAllTema()
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
      
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alert.showAlertSuccess('Postagem realizada com sucesso!')
      this.findAllPostagem()
      this.postagem = new Postagem()
    })

  }

  editarPost(){
    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.tema.id = this.idTema
    this.postagem.temas = this.tema
    this.user.id = this.idUser
    this.postagem.usuario = this.user
    
    
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.alert.showAlertSuccess('Postagem alterada com sucesso!')
      this.findAllPostagem()
      this.router.navigate(['/feed'])
    })

  }

  deletarPost(){
    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.postagemService.delete(id).subscribe(()=>{
    this.alert.showAlertInfo('Postagem deletada com sucesso!')
    this.findAllPostagem()
    this.router.navigate(['/feed'])
    })
  }

  finByTituloPostagem(){
    if(this.descricaoPost == ''){
      this.findAllPostagem
    } else {
      this.postagemService.getByDescricaoPostagem(this.descricaoPost).subscribe((resp: Postagem[])=>{
        this.listaPostagem = resp
      })
    }
  }

}
