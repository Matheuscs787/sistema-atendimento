import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
    CadProntuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
