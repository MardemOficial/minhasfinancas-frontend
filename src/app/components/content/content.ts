import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'mf-content',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class ContentComponent {

}
