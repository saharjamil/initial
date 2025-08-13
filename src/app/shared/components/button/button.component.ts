import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone:false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: "submit" | 'button' = 'button'
  @Input() buttonSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'md';
  @Input() color: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error'  = 'primary';
  @Input() colorMode: 'solid' | 'highlight' | 'outline' = 'solid';
  @Input() iconName: string = 'check-circle';
  @Input() iconSize: number = 24;
  @Input() iconDirection: "left" | 'right' = 'right';
  @Input() showIcon: boolean = true;
  @Output() buttonClick:EventEmitter<Event> = new EventEmitter<Event>()
  

  noTransition: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.noTransition = false;
    },100)
  }
  onClick(event: Event) {
    this.buttonClick.emit(event);
  }

}
