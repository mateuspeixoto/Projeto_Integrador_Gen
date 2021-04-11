import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
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


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      alert('Sua sessão expirou, faça login novamente!')
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.idUser = id
    this.findByIdUser()
    this.idPost = id
    this.findByIdPostagem(this.idPost)
    this.findAllPostagem()
    this.findAllTema()

  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User)=>{
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
      alert('Postagem realizada com sucesso!')
      this.findAllPostagem()
      this.postagem = new Postagem()
    })

  }

  editarPost(){
    this.tema.id = this.idTema
    this.postagem.temas = this.tema
    this.user.id = this.idUser
    this.postagem.usuario = this.user
    
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Postagem alterada com sucesso!')
      this.postagem = new Postagem()
      this.findAllPostagem()
      
    })

  }

  deletarPost(){
    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.postagemService.delete(id).subscribe(()=>{
    alert('Postagem deletada com sucesso!')
    this.postagem = new Postagem()
    this.findAllPostagem()
    })
  }

}
