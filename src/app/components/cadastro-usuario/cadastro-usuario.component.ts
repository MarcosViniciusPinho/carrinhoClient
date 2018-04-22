import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import swal from 'sweetalert2';

import { ToastyService } from 'ng2-toasty';

import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../domain/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  isHabilitarCadastro: boolean = false;

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService,
              private toastyService: ToastyService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  show() {
    this.isHabilitarCadastro = true;
  }

  close() {
    this.isHabilitarCadastro = false;
  }

  salvar(form: NgForm) {
    this.usuarioService.create(this.usuario)
      .then(usuario => {
        this.close();
        swal({
          title: 'Sucesso!',
          text: `Você já pode se logar no sistema, prezado usuário ${usuario.login}`,
          type: 'success',
          confirmButtonText: 'Fechar'
        }).then(() => {
          form.resetForm();
        })
      }).catch(response => {
        if(response.type == "error") {
          this.toastyService.error('Houve uma falha de comunicação com a API');
        } else {
          response.forEach(exception => {
            this.toastyService.error(exception.erro);
          })
        }
      });
  }

}
