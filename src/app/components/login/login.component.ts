import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  login(login: string, senha: string) {
    console.log(`Usuario logado, com login ${login} e senha ${senha}`);
    this.router.navigate(['/first']);
  }
}
