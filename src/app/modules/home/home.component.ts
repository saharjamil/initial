import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApexChartOptions } from '../../core/types/apex-chart-option';
import { BaseApexChartOptions } from '../../core/consts/base-apex-chart-options';
import { ChartjsOption } from '../../core/types/chartjs-option';
import { BaseChartjsOption } from '../../core/consts/base-chartjs-option';
import { HelperService } from '../../shared/services/helper.service';
import { ICardActionConfig } from '../../core/interfaces/card-action-config';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ResultViewModel } from '../../core/viewModels/result-view-model';
import { MessageViewModel } from '../../core/viewModels/message-view-model';
import { ITableActionConfig } from '../../core/interfaces/table-action-config.interface';
import { ITableActionEvent } from '../../core/interfaces/table-action-event.interface';
@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
  
export class HomeComponent {

  constructor(private cookieService: CookieService, private helperService:HelperService) { }
  ngOnInit() {
    this.cookieService.set('token','123')
  }

  barChartOption: ApexChartOptions = {
    ...BaseApexChartOptions,
    series: [
      {
          name: "میزان رضایت",
          data: [31, 40, 28]
      },
      {
          name: "میزان مشارکت",
          data: [60, 32, 45]
      },
      {
          name: "میزان بهبود",
          data: [31, 40, 28]
      },
    ],
   labels:['سری اول','سری دوم','سری سوم']
  }
  pieChartOption: ApexChartOptions = {
    ...BaseApexChartOptions,
    series:[44, 55, 13, 33],
    chart: {
      ...BaseApexChartOptions.chart,
      type:'donut'
    },
    labels: ['سری اول', 'سری دوم', 'سری سوم', 'سری چهارم'],
    legend: {
      ...BaseApexChartOptions.legend,
      position:'left'
   }
  }


  smallBarChart: ApexChartOptions = {
    ...BaseApexChartOptions,
    series: [{
      name: '',
      data:[150,200,300,250,230]
    }],
    chart: {
      ...BaseApexChartOptions.chart,
      height: '80px',
      width: 130
    },
    plotOptions: {
      bar: {
        ...BaseApexChartOptions.plotOptions.bar,
        columnWidth: 10,
        // barHeight: '70%',
        borderRadius: 5,
       colors: {
             
              backgroundBarColors: ['#000'],
              backgroundBarOpacity: 0.05,
              backgroundBarRadius: 5,
          },
        
      }
    },
    stroke: {
      show:false,
      width:0
    },
    tooltip: {
      enabled:false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      tickAmount: 0,
      labels: {
        show: false,
      },
      axisBorder: {
        show:false
      },
      axisTicks: {
        show:false,
      }
    },
    yaxis: {
      tickAmount: 0,
      labels: {
        show:false
      },
      axisBorder: {
        show:false
      }
    },
    dataLabels: {
      enabled:false
    }
  }
  smallPieChart: ChartjsOption = {
    labels: [],
    configuration: [{ data: [65, 59, 80, 81], label: 'میزان فروش', backgroundColor:[...this.helperService.getChartColors()]}],
    options: {
      ...BaseChartjsOption.options,
      scales: {
        ...BaseChartjsOption.options?.scales,
        x: {
          border: {
            width: 0
          },
          ticks: {
            display:false,
          },
          grid: {
            display:false,
          }
        },
        y: {
          border: {
            width: 0
          },
          ticks: {
            display:false,
          },
          grid: {
            display:false
          }
        }
      },
      plugins: {
        tooltip: {
          enabled:false
        },
        

      },
      datasets: {
        doughnut: {
          borderRadius: 5,
          
        }
      }
    }
  }
  smallLineChart: ApexChartOptions = {
    ...BaseApexChartOptions,
    series: [{data: [15, 30, 50, 10, 5]}],
    chart: {
      ...BaseApexChartOptions.chart,
      type: 'line',
      height: 80,
      width: 150
    },
    grid: {
      show: false,
    },
    xaxis: {
      tickAmount: 0,
      labels: {
        show: false,
      },
      axisBorder: {
        show:false
      },
      axisTicks: {
        show:false,
      }
    },
    yaxis: {
      tickAmount: 0,
      labels: {
        show:false
      },
      axisBorder: {
        show:false
      }
    },
    stroke: {
      width: 3,
      curve:'smooth'
    }

  }

  chartjsBarChart: ChartjsOption = {
    labels: ['سری اول', 'سری دوم', 'سری سوم', 'سری چهارم', 'سری پنجم', 'سری ششم', 'سری هفتم',],
    configuration: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'میزان فروش'},

    ],
    options: {
      ...BaseChartjsOption.options, 
    }
  }
  charjsOptions: ChartjsOption = {
    labels: ['کیفیت', 'زیبایی', 'راحتی', 'وضوح'], 
    configuration: [
      {
         
        label: 'Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
          "#667F66",
    "#faa719",
    "#4E79A7", // Blue
    "#76B7B2", // Teal
    "#EDC948", // Yellow
    "#BAB0AC" , // Gray
    "#59A14F", // Green
    "#F28E2B", // Orange
    "#E15759", // Reda
    "#B07AA1", // Purple
    "#FF9DA7", // Pink
    "#9C755F", // Brown
        ], 
      }
    ],
    options: {
      ...BaseChartjsOption.options,
      scales: {
        ...BaseChartjsOption.options?.scales,
        x: {
          border: {
            width: 0
          },
          ticks: {
            display:false,
          },
          grid: {
            display:false,
          }
        },
        y: {
          border: {
            width: 0
          },
          ticks: {
            display:false,
          },
          grid: {
            display:false
          }
        }
      },
    }
  }

  onChartClick(event:any) {
    console.log(event)
  }

  activityTableData: ResultViewModel<any> = new ResultViewModel<any>({List: [
    { ID: 0, Title: 'لورم ایپسوم متن', Status: 'در حال انجام' },
    { ID: 1, Title: 'لورم ایپسوم متن', Status: 'در انتظار پاسخ کارفرما' },
    { ID:2, Title:'لورم ایپسوم متن' , Status: 'تمام شده' }
  ],Message: new MessageViewModel(), Result: null, TotalCount: 3})
  
    
  activityActionMenuItems: ICardActionConfig<any>[] = [{
    title: 'مشاهده همه',
    type: 'text',
    buttonSize: 'xs',
    action: () => {
      console.log('Lorem')
    }
  }]
  activityTableActions: ITableActionConfig<any>[] = [{
    title: 'جزئیات',
    icon: 'alt-arrow-left',
    type: 'text',
    leftIcon:true,
    buttonSize: 'xs',
    action: (customAction: any) => {
      console.log('TableAction')
    }
  }]
  handleTableAction(event: ITableActionEvent<any>) {
    event.action(event.data)
  }
}
