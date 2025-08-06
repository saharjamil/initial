import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone:false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  isMobile: boolean = false;
  @HostListener('window:resize', ['$event'])

  onResize() {
    this.checkDevice();
  }
  ngOnInit() {
    this.checkDevice();
  }
  checkDevice() {
    this.isMobile =  window.matchMedia("(max-width: 575px)").matches ? true : false;
  }

}
