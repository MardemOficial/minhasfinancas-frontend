import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../Interface/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private API_URL = 'http://localhost:3003';

  constructor(private http: HttpClient) { }

  getListaDeCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.API_URL}/categorias`);
  }
}
