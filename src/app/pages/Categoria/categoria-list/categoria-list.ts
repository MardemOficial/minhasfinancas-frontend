import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria-service';

@Component({
  selector: 'app-categoria-list',
  imports: [],
  templateUrl: './categoria-list.html',
  styleUrl: './categoria-list.css'
})
export class CategoriaList implements OnInit {

  listaDeCategorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService){

  }

  ngOnInit() {
    console.log("Iniciando o componente CategoriaList");
    this.categoriaService.getListaDeCategorias().subscribe((categoria) => {
      this.listaDeCategorias = categoria;
      console.log(this.listaDeCategorias);
    });
  }
}
