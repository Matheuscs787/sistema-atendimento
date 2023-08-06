import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-busca-info',
  templateUrl: './busca-info.component.html',
  styleUrls: ['./busca-info.component.css']
})
export class BuscaInfoComponent {

  @Input() data: string = '';
  @Input() cpf: string = '';  
  @Input() nome: string = '';
  @Output() dadosFiltrados = new EventEmitter<any[]>();

  constructor(private http: HttpClient) { }

  buscarDados() { 
    let queryParams = '';

    if (this.cpf.trim() !== '') {
      queryParams += `cpf=${this.cpf.trim()}&`;
    }

    if (this.nome.trim() !== '') {
      queryParams += `nome=${this.nome.trim()}&`;
    }

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
        this.dadosFiltrados.emit(response);
      },
      (error) => {
        console.error('Erro ao fazer a busca:', error);
        this.dadosFiltrados.emit([]);
      }
    );
  }

}