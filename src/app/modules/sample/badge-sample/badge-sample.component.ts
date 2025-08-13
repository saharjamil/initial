import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-sample',
  standalone:false,
  templateUrl: './badge-sample.component.html',
  styleUrl: './badge-sample.component.scss'
})
export class BadgeSampleComponent {
  @Input() color: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error' | 'gray' = 'primary'; 
}
