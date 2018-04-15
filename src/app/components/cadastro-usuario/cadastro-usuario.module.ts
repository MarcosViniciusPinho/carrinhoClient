import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { CadastroUsuarioComponent } from './cadastro-usuario.component';

import { UsuarioService } from '../../services/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    DialogModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [UsuarioService],
  exports: [CadastroUsuarioComponent],
  declarations: [CadastroUsuarioComponent]
})
export class CadastroUsuarioModule { }
