import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  codigo: string = '';
  data: string = '';
  nome: string = '';
  nascimento: string = '';
  cpf: string = '';
  estadoCivil: string = '';
  telefone: string = '';
  telefone1: string = '';
  cep: string = '';
  cidade: string = '';
  uf: string = '';
  bairro: string = '';
  rua: string = '';
  numero: string = '';
  complemento: string = '';

  constructor(private router: Router){}

  ngAfterViewInit() {
    const selectElems = document.querySelectorAll('select');
    M.FormSelect.init(selectElems);
  }

  submitForm() {
    console.log('Formulário enviado:', this);
  }

  prontuarios(){
    this.router.navigate(['/prontuarios']);
  }
}
