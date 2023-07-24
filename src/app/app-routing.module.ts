import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  //Declarando a página home//
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {
    path: 'quem-somos', component: QuemSomosComponent
  },

  {
    path: 'contato', component: ContatoComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
