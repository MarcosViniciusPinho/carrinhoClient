import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';

import { JwtHelper } from 'angular2-jwt';

import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { LoginRouterModule } from './login-router.module';
import { CadastroUsuarioModule } from './../cadastro-usuario/cadastro-usuario.module';

import { LoginComponent } from './login.component';

import { AuthService } from '../../services/auth.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,

    LoginRouterModule,
    CadastroUsuarioModule
  ],
  providers: [AuthService, JwtHelper,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
