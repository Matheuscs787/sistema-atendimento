import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-busca-agendamentos',
  templateUrl: './busca-agendamentos.component.html',
  styleUrls: ['./busca-agendamentos.component.css']
})
export class BuscaAgendamentosComponent {
  @Input() data: string = '';
  @Output() dadosFiltrados = new EventEmitter<any[]>();

  constructor(private datePipe: DatePipe) { }

  linhas = [
    { coluna1: '01/01/2023', coluna2: '09:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
    { coluna1: '01/01/2023', coluna2: '10:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
    { coluna1: '01/01/2023', coluna2: '11:00', coluna3: '', coluna4: '' },
    { coluna1: '01/01/2023', coluna2: '13:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
    { coluna1: '01/01/2023', coluna2: '14:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
    { coluna1: '01/01/2023', coluna2: '15:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
    { coluna1: '01/01/2023', coluna2: '16:00', coluna3: '', coluna4: '' },
    { coluna1: '01/01/2023', coluna2: '17:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
    { coluna1: '02/01/2023', coluna2: '09:00', coluna3: 'Carlos Souza', coluna4: '100.000.000-00' },
    { coluna1: '02/01/2023', coluna2: '10:00', coluna3: 'Carlos Souza', coluna4: '100.000.000-00' },
    { coluna1: '02/01/2023', coluna2: '11:00', coluna3: '', coluna4: '' },
    { coluna1: '02/01/2023', coluna2: '13:00', coluna3: 'Carlos Souza', coluna4: '100.000.000-00' },
    { coluna1: '02/01/2023', coluna2: '14:00', coluna3: 'Carlos Souza', coluna4: '100.000.000-00' },
    { coluna1: '02/01/2023', coluna2: '15:00', coluna3: 'Carlos Souza', coluna4: '100.000.000-00' },
    { coluna1: '02/01/2023', coluna2: '16:00', coluna3: '', coluna4: '' },
    { coluna1: '02/01/2023', coluna2: '17:00', coluna3: 'Carlos Souza', coluna4: '100.000.000-00' },
  ];

  padrao: any[] = [];


  buscaDados() {
    let dadosFiltrados = this.linhas;

    if (this.data !== null && this.data.trim() !== '') {
      const dataFormatada = this.formatarData(this.data);
      dadosFiltrados = dadosFiltrados.filter(linha =>
        linha.coluna1.includes(dataFormatada)
      );
    } else {
      dadosFiltrados = [];
    }

    if (dadosFiltrados.length === 0) {
      const dataFormatada = this.formatarData(this.data);
      this.padrao = [
        { coluna1: dataFormatada, coluna2: '09:00', coluna3: '', coluna4: '' },
        { coluna1: dataFormatada, coluna2: '10:00', coluna3: '', coluna4: '' },
        { coluna1: dataFormatada, coluna2: '11:00', coluna3: '', coluna4: '' },
        { coluna1: dataFormatada, coluna2: '13:00', coluna3: '', coluna4: '' },
        { coluna1: dataFormatada, coluna2: '14:00', coluna3: '', coluna4: '' },
        { coluna1: dataFormatada, coluna2: '15:00', coluna3: '', coluna4: '' },
        { coluna1: dataFormatada, coluna2: '16:00', coluna3: '', coluna4: '' },
        { coluna1: dataFormatada, coluna2: '17:00', coluna3: '', coluna4: '' },
      ]
      dadosFiltrados = dadosFiltrados.concat(this.padrao);
    } else {
      this.padrao = [];
    }

    this.dadosFiltrados.emit(dadosFiltrados);

  }

  formatarData(data: string | null): string {
    if (data) {
      const parts = data.split('-');
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
    }
    return '';
  }

}
