import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router


  ) { }

  ngOnInit() {
    window.scroll(0, 0)

   this.findAllTema()
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
}
