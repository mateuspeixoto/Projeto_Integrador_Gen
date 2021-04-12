import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DiretrizesComponent } from './diretrizes/diretrizes.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedComponent } from './feed/feed.component';
import { LandingComponent } from './landing/landing.component';
import { Landing2Component } from './landing2/landing2.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},

  {path: 'home',component:LandingComponent},
  
  {path: 'entrar',component: EntrarComponent},

  {path: 'cadastrar',component:CadastroComponent},

  {path:'feed',component:FeedComponent},

  {path:'feed/:id',component:FeedComponent},

  {path:'tema',component:TemaComponent},

  {path:'tema/:id',component:TemaComponent},

  {path:'tema/:nome',component:TemaComponent},

  {path:'perfil',component:PerfilComponent},

  {path:'perfil/:id',component:PerfilComponent},

  {path:'diretrizes',component:DiretrizesComponent},

  {path:'landing2', component:Landing2Component}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{
    provide:LocationStrategy,
    useClass:HashLocationStrategy
  }]
})
export class AppRoutingModule { }
