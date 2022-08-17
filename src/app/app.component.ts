import { Component } from '@angular/core';
import { FOOTER_LINKS } from './core/constants/footer-links.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected links = FOOTER_LINKS;
}
