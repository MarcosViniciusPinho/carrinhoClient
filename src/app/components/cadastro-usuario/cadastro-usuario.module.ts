import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { CadastroUsuarioComponent } from './cadastro-usuario.component';

@NgModule({
  imports: [
    CommonModule,

    DialogModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [CadastroUsuarioComponent],
  declarations: [CadastroUsuarioComponent]
})
export class CadastroUsuarioModule { }
