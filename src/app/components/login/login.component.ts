import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Usuario } from '../../domain/usuario';

import { ToastyService } from 'ng2-toasty';

import { AuthService } from '../../services/auth.service';
import { ErrorHandlerService } from '../../services/error-handler.service';

import { ErrorHandler } from '@angular/router/src/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: Router, private auth: AuthService, private toastyService: ToastyService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  login(form: NgForm) {
    this.auth.login(this.usuario)
    .then(() => this.router.navigate(['/first']))
    .catch(response => this.errorHandler.handle(response));
  }
}
