import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/components/common/menuitem';
import { Message } from 'primeng/components/common/message';

import { ProdutoEscolhidoArray } from '../util/produto-escolhido-array';

@Component({
  selector: 'app-step',
  template: `
    <div class="alinhar-steps-com-navbar">
      <p-steps [model]="items" styleClass="steps-custom" [(activeIndex)]="activeIndex"></p-steps>
      <div class="alinhar-botao-next">
        <button pButton type="button" (click)="avancarEtapa()" label="Next" [disabled]="habilitarBotaoNext()"
          *ngIf="showBotaoNext()"></button>
      </div>
    </div>
  `,
  styleUrls: ['./step.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepComponent implements OnInit {

    items: MenuItem[];

    msgs: Message[] = [];

    activeIndex: number;

    constructor(private router: Router) {}

    ngOnInit() {
        this.activeIndex = 0;
        this.items = [{
                label: 'Produtos disponíveis',
                command: (event: any) => {
                    this.activeIndex = 0;
                }
            },
            {
                label: 'Carrinho',
                command: (event: any) => {
                    this.activeIndex = 1;
                }
            },
            {
                label: 'Confirmar compra',
                command: (event: any) => {
                    this.activeIndex = 2;
                }
            }
        ];
    }

    habilitarBotaoNext(): boolean {
      return ProdutoEscolhidoArray.isEmpty();
    }

    avancarEtapa() {
      if (this.activeIndex === 0) {
        this.activeIndex = 1;
        this.router.navigate(['/secound']);
      } else {
        this.activeIndex = 2;
        this.router.navigate(['/three']);
      }
    }

    showBotaoNext() {
      return this.activeIndex <= 1;
    }

}
