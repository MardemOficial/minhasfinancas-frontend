import { Component , input} from '@angular/core';

@Component({
  selector: 'mf-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  title = input.required<string>();
}
