import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

    tema: Tema = new Tema()
    listaTema: Tema[]  
    
  constructor(
    private temaService: TemaService, 
    private router: Router,
    private route: ActivatedRoute


  ) { }

  ngOnInit() {
    window.scroll(0, 0)
   this.findAllTema()

   let id = this.route.snapshot.params['id']
   this.findByIdTema(id)
  }
  cadastrarTema(){
    this.temaService.postTema(this.tema).subscribe((resp:Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
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
      alert('Tema atualizado com sucesso!')
    })
  }

  deleteTema(){
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
    this.temaService.delete(id).subscribe(()=>{
      alert('Tema deletado com sucesso!')
      this.router.navigate(['/inicio'])
    })

  }

}
