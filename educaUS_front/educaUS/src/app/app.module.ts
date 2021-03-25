import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MenuComponent } from './menu/menu.component';
=======
import { CadastroComponent } from './cadastro/cadastro.component';
import { LogarComponent } from './logar/logar.component';
import { LandingComponent } from './landing/landing.component';
>>>>>>> 4841c6cbb021421cf619674f7409bb6c512fb492

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MenuComponent
=======
    CadastroComponent,
    LogarComponent,
    LandingComponent
>>>>>>> 4841c6cbb021421cf619674f7409bb6c512fb492
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
