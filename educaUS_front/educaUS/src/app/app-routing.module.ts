import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
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

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
