import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApexChartOptions } from '../../core/types/apex-chart-option';
import { BaseChartOptions } from '../../core/consts/baseChartOptions';
import { Chart, ArcElement, DoughnutController, Tooltip, Legend, ChartConfiguration, ChartOptions } from 'chart.js';
import { ChartjsOption } from '../../core/types/chartjs-option';
// Chart.register(ArcElement, DoughnutController, Tooltip, Legend);
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

  barChartOption: ApexChartOptions = {
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
  pieChartOption: ApexChartOptions = {
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


  chartjsBarChart: ChartjsOption = {
    labels: ['سری اول', 'سری دوم', 'سری سوم', 'سری چهارم', 'سری پنجم', 'سری ششم', 'سری هفتم',],
    configuration: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'میزان فروش'},
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'میزان خرید' },
    ],
    options: {
      plugins: {
        title: {
          font: {
            family:'var(--fontFamily)'
          }
        },
        tooltip: {
          bodyFont: {
            family: 'Peyda',
            size: 14
          },
          bodyAlign: 'right',
          titleAlign: 'right',

          titleFont: {
            family: 'Peyda',
            size: 16,
            weight: 400
          },
         
          displayColors:false,
        },
        legend: {
          labels: {
            font: {
              family:'Peyda'
            }
          }
        }
      },
      scales: {
            x: {
              stacked: false,
              ticks: {
                font: {
                      family:'Peyda'
                }
              }
            },
            y: {
                stacked: false,
                ticks: {
                  font: {
                        family:'Peyda'
                  },
                  // count: 5,
                  
                  stepSize:30
                }
            }
      },
      datasets: {
        bar: {
          borderWidth: 2,
          borderColor: 'red',
          borderRadius: 5,
          
        }
      }
    
    }

  }
  charjsOptions: ChartjsOption = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'], 
    configuration: [
      {
      label: 'Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        '#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'
      ],
     
      hoverBorderWidth: 2,
      borderColor: '#fff',
      borderWidth: 5,
      borderRadius: 20,
}
    ],
    options: {
responsive: true,
    plugins: {
      legend: { position: 'left' },
      tooltip: {
        backgroundColor: '#fff',
        bodyColor: '#000',
        titleColor: '#000',
        caretSize: 10,
        displayColors: false,
      callbacks: {
        label: (context) => {
          const label = context.label || '';
          const value = context.raw as number;
          const total = context.chart.data.datasets[0].data
          //   .reduce((sum, val) => sum + Number(val), 0);
          // const percentage = ((value / total) * 100).toFixed(1) + '%';
          return `${label}: ${value} `;
        },
        title: (context) => {
          return `Custom title: ${context[0].label}`;
        }
      }
      },
      
    }
    }
  }

  onChartClick(event:any) {
    console.log(event)
  }
}
