import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../domain/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  display: boolean = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  show() {
    this.display = true;
  }

  close() {
    this.display = false;
  }

  salvar(form: NgForm) {
    this.usuarioService.create(this.createUsuario(form))
      .then(usuario => {
        swal({
          title: 'Sucesso!',
          text: `Você já pode se logar no sistema, prezado usuário ${usuario.login}`,
          type: 'success',
          confirmButtonText: 'Fechar'
        }).then(() => {
          location.reload();
        });
      });
  }

  createUsuario(form: NgForm) {
    let usuario: Usuario = new Usuario();
    usuario.nome = form.value.nome;
    usuario.sobrenome = form.value.sobrenome;
    usuario.login = form.value.login;
    usuario.senha = form.value.senha;
    usuario.email = form.value.email;
    return usuario;
  }

}
