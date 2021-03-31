import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user:User = new User
  confirmSenha: string
   



  constructor(
    private auth: AuthService ,
    private router: Router
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmarSenha(event:any){
    this.confirmSenha = event.target.value
  }

  cadastrar(){
      if(this.user.senha != this.confirmSenha) {
        alert('As senhas não coincidem')
      } else{
        
        this.auth.cadastrar(this.user).subscribe((resp:User)=>
        {
          this.user = resp
          this.router.navigate(['/entrar'])
          alert('Usuário cadastrado com sucesso')
        })
      }
       
  }

  validaNome(event:any){
    if(this.user.nomeUsuario.length < 3){
     alert('Nome inválido')

    }
    
  }
    
  



}
