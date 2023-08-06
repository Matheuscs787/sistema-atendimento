import { BuscaInfoComponent } from './busca-info/busca-info.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-procura',
  templateUrl: './procura.component.html',
  styleUrls: ['./procura.component.css']
})

export class ProcuraComponent implements OnInit {
  data: string = '';
  nome: string = '';
  cpf: string = '';
  exibirResultado: boolean = false;
  dadosFiltrados: any[] = [];

  @ViewChild(BuscaInfoComponent) buscaInfoComponent!: BuscaInfoComponent;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cpf = params['cpf'];
    })
  }

  ngAfterViewInit() {
    const selectElems = document.querySelectorAll('select');
    M.FormSelect.init(selectElems);
  }

  buscarDados() {
    this.exibirResultado = true;
    this.buscaInfoComponent.buscarDados();
    this.buscaInfoComponent.dadosFiltrados.subscribe((dados: any[]) => {
      this.dadosFiltrados = dados;
    });
  }

}
