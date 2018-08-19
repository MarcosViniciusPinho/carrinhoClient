import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import swal from 'sweetalert2';

import { ToastyService } from 'ng2-toasty';

import { ProdutoEscolhidoArray } from '../util/produto-escolhido-array';

import { Carrinho } from '../../domain/carrinho';
import { Usuario } from '../../domain/usuario';
import { Produto } from '../../domain/produto';
import { Endereco } from '../../domain/endereco';
import { EnderecoWs } from '../../domain/enderecoWs';
import { ProdutoCarrinho } from '../../domain/produtoCarrinho';
import { Estado } from '../../domain/estado';
import { Municipio } from '../../domain/municipio';

import { CarrinhoService } from '../../services/carrinho.service';
import { CorreioService } from '../../services/correio.service';
import { EstadoService } from '../../services/estado.service';
import { MunicipioService } from '../../services/municipio.service';
import { AuthService } from '../../services/auth.service';
import { ErrorHandlerService } from '../../services/error-handler.service';

@Component({
  selector: 'app-comprar-produtos',
  templateUrl: './comprar-produtos.component.html',
  styleUrls: ['./comprar-produtos.component.css']
})
export class ComprarProdutosComponent implements OnInit {

  produtosEscolhidos: Produto[] = [];

  usuario: Usuario;

  totalAPagar: number;

  estados: Estado[] = [];

  estadoSelecionado: String;

  municipios: Municipio[] = [];

  municipioSelecionado: String;

  constructor(private router: Router,
              private carrinhoService: CarrinhoService,
              private correioService: CorreioService,
              private toastyService: ToastyService,
              private estadoService: EstadoService,
              private municipioService: MunicipioService,
              private auth: AuthService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.produtosEscolhidos = ProdutoEscolhidoArray.list();
    this.totalAPagar = this.calcularTotalAoIniciar();
    this.redirecionarParaFirst();
    this.carregarEstados();
  }

  calcularTotalAoIniciar() {
    let totalAPagar = 0;
    for (const produto of this.produtosEscolhidos) {
        totalAPagar += produto.valor * produto.quantidade;
    }
    return totalAPagar;
  }

  redirecionarParaFirst() {
    if (ProdutoEscolhidoArray.isEmpty()) {
      this.router.navigate(['/first']);
    }
  }

  salvar(form: NgForm) {
    this.carrinhoService.create(this.createCarrinho(form))
      .then(carrinho => {
        swal({
          title: 'Sucesso!',
          text: `Sua compra foi realizada com êxito, prezado(a) ${carrinho.usuario.nome}.
          Enviamos para você a relação de produtos adquiridos via e-mail.`,
          type: 'success',
          confirmButtonText: 'Voltar a página inicial'
        }).then(() => {
            location.reload();
        });
      }).catch(response => this.errorHandler.handle(response));
  }

  createCarrinho(form: NgForm) {
    const endereco = new Endereco(form.value.cep, form.value.logradouro, form.value.complemento,
      form.value.bairro, form.value.municipio, form.value.estado);
    this.usuario.login = this.auth.jwtPayload.user_name;
    const produtosCarrinhos: ProdutoCarrinho[] = [];
    this.produtosEscolhidos.forEach(produto => {
      produtosCarrinhos.push(new ProdutoCarrinho(produto));
    });
    return new Carrinho(this.usuario, produtosCarrinhos, endereco);
  }

  buscarEnderecoPorCep(form: NgForm) {
    if (form.value.cep) {
      this.correioService.buscarCep(form.value.cep).then(endereco => {
        this.popularCamposDeEnderecoPorCepInformado(form, endereco);
        this.exibirNotificacaoDeCepNaoEncontrado(endereco, form);
        this.carregarMunicipios();
      });
    }
  }

  exibirNotificacaoDeCepNaoEncontrado(endereco: EnderecoWs, form: NgForm) {
    if (endereco.error) {
      this.toastyService.error('O cep informado não foi encontrado');
      this.estadoSelecionado = '';
      this.municipioSelecionado = '';
      form.value.cep = '';
    }
  }

  popularCamposDeEnderecoPorCepInformado(form: NgForm, endereco: EnderecoWs) {
    form.value.logradouro = endereco.logradouro;
    form.value.complemento = endereco.complemento;
    form.value.bairro = endereco.bairro;
    this.estadoSelecionado = endereco.uf;
    this.municipioSelecionado = endereco.localidade;
  }

  carregarEstados() {
    this.estadoSelecionado = '';
    this.municipioSelecionado = '';
    this.estadoService.list().then(estadosCarregados => this.estados = estadosCarregados)
    .catch(response => this.errorHandler.handle(response));
  }

  carregarMunicipios() {
    if (this.estadoSelecionado) {
      this.municipioService.listByEstado(this.estadoSelecionado)
      .then(municipiosCarregados => this.municipios = municipiosCarregados)
      .catch(response => {
        this.errorHandler.handle(response);
        this.estadoSelecionado = '';
        this.municipioSelecionado = '';
      });
    } else {
      this.municipios = [];
      this.municipioSelecionado = '';
    }
  }

}
