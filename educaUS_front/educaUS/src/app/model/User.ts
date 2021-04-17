import { Postagem } from "./Postagem";
import { Tema } from "./Tema";

export class User {
   id:number;
   nome: string;
   nomeUsuario: string;
   email: string;
   biografia: string
   fotoPerfil: string; 
   fotoCapa: string;
   senha: string;
   postagem:Postagem[];
    
}