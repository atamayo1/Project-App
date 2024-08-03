import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { UppercasePipe } from '../../pipes/uppercase.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightDirective, UppercasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = "Welcome to the Compromised Account Checker";
  description: string = "Use the navigation above to check if your account is compromised.";
}
