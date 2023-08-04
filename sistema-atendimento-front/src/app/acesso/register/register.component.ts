import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nome: string = '';
  login: string = '';
  senha: string = '';
  senhac: string = '';

  constructor(private router: Router, private http: HttpClient){}

  criar(){
    if(this.senha === this.senhac){
      const usuario = {
        nome: this.nome,
        login: this.login,
        senha: this.senha
      };

      const url = 'http://localhost:3000/usuarios';

      this.http.post(url, usuario).subscribe(
        (response: any) => {
          this.router.navigate(['/login']);
        },
        (error) => {
          alert('Erro ao cadastrar usuário');
        }
      );
    }else{
      alert('Senhas não batem!')
    }
    
    
  }

  acessar(){
    this.router.navigate(['/login']);
  }
}
