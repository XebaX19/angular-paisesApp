import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  //Angular permite trabajar el CSS de manera encapsulada por Componente (en este caso, el estilo se aplica SOLO a los "li" del sidebar.component)
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
