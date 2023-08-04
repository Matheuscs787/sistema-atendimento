import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  senha: string = '';

  constructor(private router: Router, private http: HttpClient) {
  }

  acessar() {

    const url = `http://localhost:3000/usuarios?login=${this.login}&senha=${this.senha}`;

    this.http.get(url).subscribe(
      (response: any) => {
        if (Array.isArray(response) && response.length > 0) {
          this.router.navigate(['/agenda']);
        } else {
          alert('Usuário não encontrado. Verifique suas credenciais.');
        }
      },
      (error) => {
        alert('Erro ao fazer login');
      }
    );
  }

  registrar() {
    this.router.navigate(['/registrar'])
  }

}
