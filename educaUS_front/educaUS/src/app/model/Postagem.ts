import { Tema } from "./Tema";
import { User } from "./User";

export class Postagem {

id:number;
postdate:Date;
descricao:string;
curtida:number;
foto:string;
temas:Tema;
usuario:User



}