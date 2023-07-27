import { Component } from '@angular/core';

@Component({
  selector: 'app-cad-prontuario',
  templateUrl: './cad-prontuario.component.html',
  styleUrls: ['./cad-prontuario.component.css']
})

export class CadProntuarioComponent {
  data: string = '';
  nome: string = '';
  cpf: string = '';
  assunto: string = ''; 
  abordagem: string = '';
  orientacao: string = '';

  submitForm() {
    console.log('Formulário enviado:', this);
  }
}
