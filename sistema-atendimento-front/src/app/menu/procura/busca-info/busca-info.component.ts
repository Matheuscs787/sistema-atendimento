import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-busca-info',
  templateUrl: './busca-info.component.html',
  styleUrls: ['./busca-info.component.css']
})
export class BuscaInfoComponent {

  @Input() cpf: string = '';
  @Input() data: string = '';
  @Input() nome: string = '';
  @Output() dadosFiltrados = new EventEmitter<any[]>();

  linhas: any[] = [
    { coluna1: 'Nome:', coluna2: 'm', coluna3: 'CPF:', coluna4: '0' },
    { coluna1: 'Nome:', coluna2: 'Carlos', coluna3: 'CPF:', coluna4: '11111111111' },
    { coluna1: 'Nome:', coluna2: 'Igor', coluna3: 'CPF:', coluna4: '22222222222' },
    { coluna1: 'Nome:', coluna2: 'Rafael', coluna3: 'CPF:', coluna4: '33333333333' },
    { coluna1: 'Nome:', coluna2: 'm', coluna3: 'CPF:', coluna4: '1' },
  ];

  buscarDados() {
    let dadosFiltrados = this.linhas;

    if (this.cpf.trim() !== '' && this.nome.trim() !== '') {
      dadosFiltrados = dadosFiltrados.filter(linha => 
        linha.coluna2.includes(this.nome) && linha.coluna4 === this.cpf
      );
    } else if (this.cpf.trim() !== '') {
      dadosFiltrados = dadosFiltrados.filter(linha => linha.coluna4 === this.cpf);
    } else if (this.nome.trim() !== '') {
      dadosFiltrados = dadosFiltrados.filter(linha => linha.coluna2.includes(this.nome));
    } else {
      dadosFiltrados = [];
    }
    this.dadosFiltrados.emit(dadosFiltrados);
  }

}
