import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent{
  myForm: FormGroup;
  codigo: string = '';
  dataCadastro: string = '';
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

  constructor(private router: Router, private formBuilder: FormBuilder){
    this.myForm = this.formBuilder.group({
      nome: ['', Validators.required],
      nascimento: ['', Validators.required],
      cpf: ['', Validators.maxLength(11), Validators.minLength(11), Validators.required],
      estadoCivil: ['', Validators.required],
      telefone: ['', Validators.required],
      telefone1: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      bairro: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    const selectElems = document.querySelectorAll('select');
    M.FormSelect.init(selectElems);
  }

  ngOnInit() {}

  submitForm() {
    console.log('Formulário enviado:', this);
  }

  get formControls(){
    return this.myForm.controls;
  }

  prontuarios(){
    if (this.codigo) {
      this.router.navigate(['/prontuarios', this.codigo]);
    } else {
      alert('Só é possível abrir prontuários de pacientes cadastrados!');
    }
  }
}
