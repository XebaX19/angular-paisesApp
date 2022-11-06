import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(terminoBusqueda: string) {
    this.hayError = false;
    this.termino = terminoBusqueda;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        this.paises = [...paises];
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(terminoBusqueda: string) {
    this.hayError = false;
    this.termino = terminoBusqueda;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(terminoBusqueda)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5),
      (err) => this.paisesSugeridos = []
      );
  }

  buscarSugerido(terminoBusqueda: string) {
    this.buscar(terminoBusqueda);
  }
}
