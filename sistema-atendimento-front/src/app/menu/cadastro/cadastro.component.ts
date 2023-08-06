import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Paciente } from 'src/app/inteface/paciente.model';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  myForm: FormGroup;
  paciente: Paciente = {
    id: '',
    dataCadastro: '',
    nome: '',
    nascimento: '',
    cpf: '',
    estadoCivil: '',
    telefone: '',
    telefone1: '',
    cep: '',
    cidade: '',
    uf: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: ''
  };

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) {
    this.myForm = this.formBuilder.group({
      id: [''],
      dataCadastro: [''],
      nome: ['', Validators.required],
      nascimento: ['', Validators.required],
      cpf: ['', [Validators.maxLength(11), Validators.minLength(11), Validators.required]],
      estadoCivil: ['', Validators.required],
      telefone: ['', Validators.required],
      telefone1: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      bairro: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['']
    });

    const dataAtual = new Date().toLocaleDateString('pt-BR');
    this.myForm.get('dataCadastro')?.patchValue(dataAtual);
  }

  ngAfterViewInit() {
    const selectElems = document.querySelectorAll('select');
    M.FormSelect.init(selectElems);
  }

  submitForm() {
    if (this.myForm.valid) {
      const codigo = this.myForm.get('id')?.value;
      if (!codigo) {
        const dataAtual = new Date();
        const formattedDataAtual = this.formatDate(dataAtual);
        this.myForm.get('dataCadastro')?.setValue(formattedDataAtual);

        const paciente = this.myForm.value;
        this.http.post<any>('http://localhost:3000/paciente', paciente).subscribe(
          (response) => {
            this.myForm.patchValue({ id: response.id });
            this.myForm.patchValue({ dataCadastro: response.dataCadastro });
          },
          (error) => {
            alert('Erro ao salvar paciente:' + JSON.stringify(error));
          }
        );
      } else {
        alert('Formulário inválido. Verifique os campos.');
      }
    } else {
      alert('Formulário inválido. Verifique os campos.');
    }
  }

  get formControls() {
    return this.myForm.controls;
  }

  prontuarios() {
    if (this.paciente.id !== '') {
      this.router.navigate(['/prontuarios', this.paciente.id]);
    } else {
      alert('Só é possível abrir prontuários de pacientes cadastrados!');
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

}
