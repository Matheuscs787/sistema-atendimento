import { Component, AfterViewInit , ViewChild } from '@angular/core';
import { BuscaAgendamentosComponent } from './busca-agendamentos/busca-agendamentos.component';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements AfterViewInit {
  data: string = '';
  email: string = '';
  mensagem: string = '';
  dadosFiltrados: any[] = [];

  @ViewChild(BuscaAgendamentosComponent) buscaAgendamentosComponent!: BuscaAgendamentosComponent;

  constructor() {
    this.data = this.getDataAtual();
  }

  ngAfterViewInit(): void {
    this.buscarConsultas();
  }

  getDataAtual(): string {
    const data = new Date();
    const ano = data.getFullYear();
    const mes = this.adicionarZeroEsquerda(data.getMonth() + 1);
    const dia = this.adicionarZeroEsquerda(data.getDate());
    return `${ano}-${mes}-${dia}`;
  }

  adicionarZeroEsquerda(numero: number): string {
    return numero < 10 ? `0${numero}` : `${numero}`;
  }

  buscarConsultas() {
    console.log('oi');
    this.buscaAgendamentosComponent.buscaDados();
    this.buscaAgendamentosComponent.dadosFiltrados.subscribe((dados: any[]) => {
      this.dadosFiltrados = dados;
    });
  }

}
