import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  public isLoading: boolean = false;

  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {
    if(region === this.regionActiva) { return; }

    this.isLoading = true;
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarPorRegion(this.regionActiva)
    .subscribe((paises) => {
      this.paises = [...paises];
      this.isLoading = false;
    }, (err) => {
      this.paises = [];
      this.isLoading = false;
    });
  }

  getClaseCSS(region: string): string {
    return (this.regionActiva === region) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
}
