import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { DirectiveTitle, DirectivePhragrafy } from './components/card/directives/directivecards.directive';

@Component({
  selector: 'app-root',
  imports: [CardComponent, DirectiveTitle, DirectivePhragrafy],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-curso';
}
