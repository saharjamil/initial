import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  data: { username?: string, password?: string, captcha?: string } = {}
  
  owlOption: OwlOptions = {
    items: 1,
    rtl: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    loop: true,
  }
}
