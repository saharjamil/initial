import { Component, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild('owlCarousle', {static:false}) owlCarousel: any;
  data: { username?: string, password?: string, captcha?: string } = {}
  
  owlOption: OwlOptions = {
    items: 1,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    loop: true,
    // autoWidth: false,
    responsiveRefreshRate: 50
  }

}
