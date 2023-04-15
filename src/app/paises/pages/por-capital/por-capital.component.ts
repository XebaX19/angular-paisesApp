import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  public isLoading: boolean = false;
  
  constructor(private paisService: PaisService) { }

  buscar(terminoBusqueda: string) {
    this.isLoading = true;
    this.hayError = false;
    this.termino = terminoBusqueda;

    this.paisService.buscarPorCapital(this.termino)
      .subscribe((paises) => {
        this.paises = [...paises];
        this.isLoading = false;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
        this.isLoading = false;
      });
  }

}
