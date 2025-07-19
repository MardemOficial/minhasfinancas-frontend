import { Subcategoria } from "../../Interface/subcategoria";  

export interface Categoria {
    id: number;
    descricao_categoria: string;
    subcategoria: Subcategoria;
}
