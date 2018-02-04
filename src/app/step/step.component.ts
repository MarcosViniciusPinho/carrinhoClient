import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MenuItem } from 'primeng/components/common/menuitem';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-step',
  template: `
    <h3>Etapas de compra</h3>
    <p-steps [model]="items" styleClass="steps-custom"></p-steps>
  `,
  styleUrls: ['./step.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepComponent implements OnInit {

    items: MenuItem[];

    msgs: Message[] = [];

    // tslint:disable-next-line:no-inferrable-types
    activeIndex: number = 1;

    ngOnInit() {
        this.items = [{
                label: 'Produtos disponíveis',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'First Step', detail: event.item.label});
                }
            },
            {
                label: 'Carrinho',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Seat Selection', detail: event.item.label});
                }
            },
            {
                label: 'Confirmar compra',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity: 'info', summary: 'Pay with CC', detail: event.item.label});
                }
            }
        ];
    }

}
