import { Tema } from "./Tema";
import { User } from "./User";

export class Postagem {

id:number;
postdate:Date;
descricao:string;
link:string;
temas:Tema;
usuario:User

}