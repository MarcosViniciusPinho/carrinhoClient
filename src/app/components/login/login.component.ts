import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Usuario } from '../../domain/usuario';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  login(form: NgForm) {
    /* console.log(`Usuario logado, com login ${this.usuario.login} e senha ${this.usuario.senha}`);
    this.router.navigate(['/first']); */
    this.auth.login(this.usuario);
  }
}
