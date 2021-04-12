import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderModule } from 'ngx-order-pipe';


import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DiretrizesComponent } from './diretrizes/diretrizes.component';
import { BarrasupComponent } from './barrasup/barrasup.component';
import { TemaComponent } from './tema/tema.component';
import { Landing2Component } from './landing2/landing2.component';






@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    EntrarComponent,
    RodapeComponent,
    FeedComponent,
    PerfilComponent,
    DiretrizesComponent,
    BarrasupComponent,
    TemaComponent,
    Landing2Component,
    AlertasComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    OrderModule,
    ModalModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
