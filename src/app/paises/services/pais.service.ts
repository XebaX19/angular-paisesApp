import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url, { params: this.httpParams })
      .pipe(
        catchError(() => of([])),
        delay(2000)
      );
  }

  get httpParams() {
    //Devuelvo los params que le voy a setear a las distintas llamadas a la API
    return new HttpParams().set('fields', 'name,cca2,flags,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.getCountriesRequest(url);
  }

  buscarPorCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.getCountriesRequest(url);
  }

  getPaisPorCode(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country[]>(url);
  }

  buscarPorRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;

    return this.getCountriesRequest(url);
  }
}
