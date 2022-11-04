import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//switchMap: Permite recibir un Observable y regresar otro Observable
//tap: operador que dispara un evento secundario
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country; //Con el signo de exclamación le indico a TS que le permito ser nulo.

  //Inyecto la ruta activa que estoy consumiendo, para poder obtener los parámetros de la misma
  //Luego inyecto el servicio
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        //El switchMap recibe el valor del Observable "activatedRoute" y devuelve el valor del Observable getPaisPorCode
        switchMap(({ id }) => this.paisService.getPaisPorCode(id)),
        
        //El tap recibe el valor del observable, y ejecuta lo que se indica con ese valor
        tap(console.log)
      )
      .subscribe(paises => this.pais = paises[0]);


    //Otra forma de hacer lo anterior:
    //Al ser un Observable, me puedo suscribir para buscar los parámetros de la ruta
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.paisService.getPaisPorCode(id).subscribe(paises => {
    //     console.log(paises[0]);
    //   });
    // });
  }

}
