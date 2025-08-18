import { Component } from '@angular/core';
import { Router,RouterOutlet, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'mf-content',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class ContentComponent {
  
  title: string = 'Dashboard';

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let route = this.activatedRoute;
      while (route.firstChild) {
        route = route.firstChild;
      }
      this.title = route.snapshot.data['title'] || 'Dashboard';
    });
  }

  
}
