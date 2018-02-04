import { Component, ViewEncapsulation } from '@angular/core';

import { MenuItem } from 'primeng/components/common/menuitem';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  items: MenuItem[];

  msgs: Message[] = [];

  // tslint:disable-next-line:no-inferrable-types
  activeIndex: number = 1;

  // tslint:disable-next-line:use-life-cycle-interface
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
