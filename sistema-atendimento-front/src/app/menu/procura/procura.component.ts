import { Component } from '@angular/core';

@Component({
  selector: 'app-procura',
  templateUrl: './procura.component.html',
  styleUrls: ['./procura.component.css']
})
export class ProcuraComponent {
  data: string = '';
  nome: string = '';
  cpf: string = '';
  
  ngAfterViewInit() {
    const selectElems = document.querySelectorAll('select');
    M.FormSelect.init(selectElems);
  }

  submitForm() {
    console.log('Formulário enviado:', this);
  }

  buscarConsultas() {
    console.log('Formulário enviado:');
    console.log('Data:', this.data);
    console.log('Nome:', this.nome);
    console.log('cpf:', this.cpf);
  }

  linhas = [
    { coluna1: 'Nome:', coluna2: '', coluna3: 'CPF:', coluna4: '' },
    { coluna1: 'Nome:', coluna2: '', coluna3: 'CPF:', coluna4: '' },
    { coluna1: 'Nome:', coluna2: '', coluna3: 'CPF:', coluna4: '' },
    { coluna1: 'Nome:', coluna2: '', coluna3: 'CPF:', coluna4: '' },
    { coluna1: 'Nome:', coluna2: '', coluna3: 'CPF:', coluna4: '' },
  ];

}
