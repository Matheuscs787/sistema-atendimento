import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {
  data: string = '';
  email: string = '';
  mensagem: string = '';

  linhas = [
    { coluna1: '01/01/2023', coluna2: '09:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
    { coluna1: '01/01/2023', coluna2: '10:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
    { coluna1: '01/01/2023', coluna2: '11:00', coluna3: '', coluna4: '' },
    { coluna1: '01/01/2023', coluna2: '13:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
    { coluna1: '01/01/2023', coluna2: '14:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
    { coluna1: '01/01/2023', coluna2: '15:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
    { coluna1: '01/01/2023', coluna2: '16:00', coluna3: '', coluna4: '' },
    { coluna1: '01/01/2023', coluna2: '17:00', coluna3: 'Matheus Souza', coluna4: '000.000.000-00' },
  ];

  buscarConsultas() {
    console.log('Formulário enviado:');
    console.log('Data:', this.data);
    console.log('E-mail:', this.email);
    console.log('Mensagem:', this.mensagem);
  }
}
