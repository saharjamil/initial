import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ChartOptions } from '../../core/types/chart-option';
import { BaseChartOptions } from '../../core/consts/baseChartOptions';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private cookieService: CookieService) { }
  ngOnInit() {
    this.cookieService.set('token','123')
  }

  barChartOption: ChartOptions = {
    ...BaseChartOptions,
    series: [
      {
          name: "میزان رضایت",
          data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
          name: "میزان مشارکت",
          data: [60, 32, 45, 32, 34, 52, 41]
      },
      {
          name: "میزان بهبود",
          data: [31, 40, 28, 51, 42, 109, 100]
      },
    ],
   labels:['سری اول','سری دوم','سری سوم','سری چهارم','سری پنجم','سری ششم','سری هفتم',]
  }
  pieChartOption: ChartOptions = {
    ...BaseChartOptions,
    series:[44, 55, 13, 33],
    chart: {
      ...BaseChartOptions.chart,
      type:'donut'
    },
    labels: ['سری اول', 'سری دوم', 'سری سوم', 'سری چهارم'],
    legend: {
      ...BaseChartOptions.legend,
      position:'left'
   }
  }
}
