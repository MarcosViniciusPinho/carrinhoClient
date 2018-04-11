import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.display = true;
  }

  close() {
    this.display = false;
  }

}
