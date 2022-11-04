import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent {

  //Con el @Input() le decimos que la propiedad viene del componente padre. Además hay que bindearla en el HTML padre.
  @Input() paises: Country[] = [];
  
  constructor() { }

}
