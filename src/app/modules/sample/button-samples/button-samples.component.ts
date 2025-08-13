import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-samples',
  standalone:false,
  templateUrl: './button-samples.component.html',
  styleUrl: './button-samples.component.scss'
})
export class ButtonSamplesComponent {
  @Input() buttonColor: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error' | 'gray'  = 'primary';
}
