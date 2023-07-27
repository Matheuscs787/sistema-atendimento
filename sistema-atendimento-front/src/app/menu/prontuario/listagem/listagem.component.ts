import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  data: string = '';
  nome: string = '';
  cpf: string = '';

  constructor(private router: Router) {}

  linhas = [
    { coluna1: '01/01/2023', coluna2: 'Resumo sobre o assunto', coluna3: 'Resumo sobre a abordagem', coluna4: 'Resumo sobre a orientação' },
    { coluna1: '01/01/2022', coluna2: 'Resumo sobre o assunto', coluna3: 'Resumo sobre a abordagem', coluna4: 'Resumo sobre a orientação' },
    { coluna1: '01/01/2021', coluna2: 'Resumo sobre o assunto', coluna3: 'Resumo sobre a abordagem', coluna4: 'Resumo sobre a orientação' },
    { coluna1: '01/01/2020', coluna2: 'Resumo sobre o assunto', coluna3: 'Resumo sobre a abordagem', coluna4: 'Resumo sobre a orientação' },
    { coluna1: '01/01/2019', coluna2: 'Resumo sobre o assunto', coluna3: 'Resumo sobre a abordagem', coluna4: 'Resumo sobre a orientação' },
  ];

  onRowClick(linha: any) {
    this.router.navigate(['/prontuario'], { queryParams: { dados: JSON.stringify(linha) } });
  }

  fechar(){
    this.router.navigate(['/cadastro']);
  }

  novo(){
    this.router.navigate(['/prontuario']);
  }


}
