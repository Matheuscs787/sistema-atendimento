import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  senha: string = '';
  usuarios: any[] = [
    { login: 'user', senha: 'pass' },
    { login: 'matheus', senha: 'senha' }
  ];

  constructor(private router: Router) {
  }

  acessar() {
    const usuarioEncontrado = this.usuarios.find(usuario =>
      usuario.login === this.login && usuario.senha === this.senha
    );
    if (usuarioEncontrado) {
      this.router.navigate(['/agenda']);
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }
  registrar() {
    this.router.navigate(['/registrar'])
  }


}
