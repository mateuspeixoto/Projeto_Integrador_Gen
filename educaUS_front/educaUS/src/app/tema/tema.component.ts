import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

    tema: Tema = new Tema()
    listaTema: Tema[]  
    idTema: number
    nomeTema: string
    
  constructor(
    private temaService: TemaService, 
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.alert.showAlertInfo('Sua sessão expirou, faça login novamente!')
      this.router.navigate(['/entrar'])
    }
   
   this.findAllTema()

   let id = this.route.snapshot.params['id']
   this.findByIdTema(id)

  }
  
  cadastrarTema(){
    this.temaService.postTema(this.tema).subscribe((resp:Tema)=>{
      this.tema = resp
      this.alert.showAlertSuccess('Tema cadastrado com sucesso!')
      this.findAllTema()
      this.tema = new Tema()
      
    })
  }
  
  findAllTema(){
    this.temaService.getAllTema().subscribe((resp:Tema[])=> {
      this.listaTema = resp
    })
  }

  findByIdTema(id: number ){
    this.temaService.getByIdTema(id).subscribe((resp:Tema)=>{
      this.tema = resp 
    })
  }

  editarTema(){
    this.temaService.putTema(this.tema).subscribe((resp:Tema)=> {
      this.tema = resp
      this.alert.showAlertSuccess('Tema atualizado com sucesso!')
      this.findAllTema()
      this.tema = new Tema()
    })
  }

  deleteTema(){
  let id = this.route.snapshot.params['id']
   this.findByIdTema(id)
    this.temaService.delete(id).subscribe(()=>{
      this.alert.showAlertInfo('Tema deletado com sucesso!')
      this.findAllTema()
      this.tema = new Tema()
    })

  }

  finByNomeTema(){
    if(this.nomeTema == ''){
      this.findAllTema()
    } else {
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[])=>{
        this.listaTema = resp
      })
    }
  }

}
