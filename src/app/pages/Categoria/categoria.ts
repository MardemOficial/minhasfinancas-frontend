import { Subcategoria } from "../Subcategoria/subcategoria";  

export interface Categoria {
    id: number;
    descricao_categoria: string;
    subcategoria: Subcategoria;
}
