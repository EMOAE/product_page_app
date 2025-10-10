import { Component } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product_page_app';

  ngAfterViewInit(): void {
    const header = document.querySelector('header');
    if (header) {
      anime({
        targets: header,
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutQuad'
      });
    }
  }
}
