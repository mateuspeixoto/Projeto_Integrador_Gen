import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DiretrizesComponent } from './diretrizes/diretrizes.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedComponent } from './feed/feed.component';
import { LandingComponent } from './landing/landing.component';
import { PerfilComponent } from './perfil/perfil.component';




const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},

  {path: 'home',component:LandingComponent},
  
  {path: 'entrar',component: EntrarComponent},

  {path: 'cadastrar',component:CadastroComponent},

  {path:'feed',component:FeedComponent},

  {path:'perfil',component:PerfilComponent},

  {path:'diretrizes',component:DiretrizesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
