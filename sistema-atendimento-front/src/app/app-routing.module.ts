import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './acesso/login/login.component';
import { RegisterComponent } from './acesso/register/register.component';

import { AgendaComponent } from './menu/agenda/agenda.component';
import { CadastroComponent } from './menu/cadastro/cadastro.component';
import { ProcuraComponent } from './menu/procura/procura.component';

import { CadProntuarioComponent } from './menu/prontuario/cad-prontuario/cad-prontuario.component';
import { ListagemComponent } from './menu/prontuario/listagem/listagem.component';

import { NotfoundComponent } from './componentes/notfound/notfound.component';

const routes: Routes = [    
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegisterComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'cadastro/:id', component: CadastroComponent},
  {path: 'procura', component: ProcuraComponent},
  {path: 'prontuario', component: CadProntuarioComponent},
  {path: 'prontuario/:id', component: CadProntuarioComponent},
  {path: 'prontuarios/:idPaciente', component: ListagemComponent},
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
