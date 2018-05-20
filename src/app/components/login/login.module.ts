import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { LoginRouterModule } from './login-router.module';
import { CadastroUsuarioModule } from './../cadastro-usuario/cadastro-usuario.module';

import { LoginComponent } from './login.component';

import { AuthService } from '../../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,

    LoginRouterModule,
    CadastroUsuarioModule
  ],
  providers: [AuthService],
  declarations: [LoginComponent]
})
export class LoginModule { }
