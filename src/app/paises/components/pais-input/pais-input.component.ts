import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  //Con el @Input() le decimos que la propiedad viene del componente padre. Además hay que bindearla en el HTML padre.
  @Input() placeholder: string = '';

  // Evento que se emite al componente padre para pasar el término de búsqueda
  // Además se debe agregar en el HTML del componente padre, la llamada
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  //Evento que se emite cuando el user deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject(); //Es un Observable "especial"

  termino: string = '';

  //Se dispara una única vez cuando el componente es creado
  ngOnInit() {
    //Nos suscribimos al debouncer
    this.debouncer
      .pipe(
        //El pipe permite transformar la salida del suscribe
        debounceTime(300) //Defino cuantos milisegundos voy a esperar antes de emitir el siguiente valor
        //Es decir, hasta que no se cumplan 300 ms, no se va a emitir el suscribe
      )
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    //Cada vez que se presiona una tecla, llama al "next"
    //El "next" está suscrito en el ngOnInit, por lo que debería ejecutar lo del suscribe
    this.debouncer.next(this.termino);
  }

}
