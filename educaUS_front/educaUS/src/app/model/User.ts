import { Postagem } from "./Postagem";

export class User {
   id:number;
   nome: string;
   nomeUsuario: string;
   email: string;
   fotoPerfil: string; 
   fotoCapa: string;
   senha: string;
   postagem:Postagem[]


}