import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-busca-agendamentos',
  templateUrl: './busca-agendamentos.component.html',
  styleUrls: ['./busca-agendamentos.component.css']
})
export class BuscaAgendamentosComponent {
  @Input() data: string = '';
  @Output() dadosFiltrados = new EventEmitter<any[]>();

  constructor(private http: HttpClient) {}

  padrao: any[] = [];

  buscaDados() {
    let queryParams = '';

    if (this.data) {
      queryParams += `data=${this.data}&`;
    }

    if (queryParams.length === 0) {
      this.dadosFiltrados.emit([]);
      return;
    }

    queryParams = queryParams.slice(0, -1);

    const url = `http://localhost:3000/atendimentos?${queryParams}`;

    this.http.get<any[]>(url).subscribe(
      (response: any[]) => {
        const isEmptyResponse = Object.keys(response).length === 0;
        if (isEmptyResponse) {
          this.padrao = [
            { data: this.data, horario: '09:00', nome: '', cpf: '' },
            { data: this.data, horario: '10:00', nome: '', cpf: '' },
            { data: this.data, horario: '11:00', nome: '', cpf: '' },
            { data: this.data, horario: '13:00', nome: '', cpf: '' },
            { data: this.data, horario: '14:00', nome: '', cpf: '' },
            { data: this.data, horario: '15:00', nome: '', cpf: '' },
            { data: this.data, horario: '16:00', nome: '', cpf: '' },
            { data: this.data, horario: '17:00', nome: '', cpf: '' },
          ]
          this.dadosFiltrados.emit(this.padrao);
        } else {
          this.dadosFiltrados.emit(response);
        }
      },
      (error) => {
        console.error('Erro ao fazer a busca:', error);
        this.dadosFiltrados.emit([]);
      }
    );

  }

}