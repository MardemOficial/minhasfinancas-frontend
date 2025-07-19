import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard-component/dashboard-component';
import { TransacaoList } from './pages/Transacao/transacao-list/transacao-list';
import { SubcategoriaList } from './pages/Subcategoria/subcategoria-list/subcategoria-list';
import { CategoriaList } from './pages/Categoria/categoria-list/categoria-list';
import { ContaList } from './pages/Conta/conta-list/conta-list';
import { FornecedorList } from './pages/Fornecedor/fornecedor-list/fornecedor-list';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'transacoes', component: TransacaoList},
    {path: 'subcatetorias', component: SubcategoriaList},
    {path: 'categorias', component: CategoriaList},
    {path: 'contas', component: ContaList},
    {path: 'fornecedores', component: FornecedorList},
];
