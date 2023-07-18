import { Component  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginValue: string = '';
  senhaValue: string = '';

  constructor(private router: Router){}

  login(){
    this.router.navigate(['/agenda']);
  }
  registrar(){
    this.router.navigate(['/registrar'])
  }
}
