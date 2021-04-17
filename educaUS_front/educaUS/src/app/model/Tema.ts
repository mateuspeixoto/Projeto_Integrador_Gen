import { Postagem } from "./Postagem";
import { User } from "./User";

export class Tema{
    id:number;
    nome:string;
    categoria:string;
    cursos:string;
    postagem:Postagem[]
    usuario:User    

}