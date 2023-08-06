import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './acesso/login/login.component';
import { RegisterComponent } from './acesso/register/register.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AgendaComponent } from './menu/agenda/agenda.component';
import { CadastroComponent } from './menu/cadastro/cadastro.component';
import { ProcuraComponent } from './menu/procura/procura.component';
import { ListagemComponent } from './menu/prontuario/listagem/listagem.component';
import { CadProntuarioComponent } from './menu/prontuario/cad-prontuario/cad-prontuario.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { BuscaInfoComponent } from './menu/procura/busca-info/busca-info.component';
import { BuscaAgendamentosComponent } from './menu/agenda/busca-agendamentos/busca-agendamentos.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    AgendaComponent,
    CadastroComponent,
    ProcuraComponent,
    ListagemComponent,
    CadProntuarioComponent,
    NotfoundComponent,
    BuscaInfoComponent,
    BuscaAgendamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
