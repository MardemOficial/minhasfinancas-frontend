import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu';
import { ContentComponent } from './components/content/content';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, ContentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title: string = 'minhasfinancas-frontend';
}
