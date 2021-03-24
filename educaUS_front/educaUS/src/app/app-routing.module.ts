import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogarComponent } from './logar/logar.component';

const routes: Routes = [

  {path:'entrar',component:LogarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
