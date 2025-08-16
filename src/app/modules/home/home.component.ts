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

import { CalendarData } from '../../core/data/calendar-data';
import { CalendarFilterDateViewModel } from '../../core/viewModels/calendar-filter-date-view-model';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
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

  barChartBackgroundOption: ApexChartOptions = {
    ...BaseApexChartOptions,
    series: [
      // { name: 'تعداد تسک انجام شده', data: [70,50,30,100,200,80,40] },
      { name: 'شنبه', data: [ 90, null, null, null, null, null, null] },
      { name: 'یکشنبه', data: [null, 50, null, null, null, null, null] },
      { name: 'دوشنبه', data: [null, null, 80, null, null, null, null] },
      { name: 'سه شنبه', data: [null, null, null, 60, null, null, null] },
      { name: 'چهارشنبه', data: [null, null, null, null, 70, null, null] },
      { name: 'پنجشنبه', data: [null, null, null, null, null, 150, null] },
      { name: 'جمعه', data: [null, null, null, null, null, null, 200] }
    ],
    chart: {
      ...BaseApexChartOptions.chart,
      // width: 'calc(100% - 2rem)',
      stacked: true,
    },
    plotOptions: {
      bar: {
        ...BaseApexChartOptions.plotOptions.bar,
        columnWidth: '70%',
        rangeBarOverlap: false,
        borderRadius: 15,
        distributed: true,
        dataLabels: {
          ...BaseApexChartOptions.plotOptions.bar?.dataLabels,
          position: 'top',         
        }
        
      }
    },
    colors: ['var(--primary)','var(--primary-20)','var(--primaryLight)','var(--primary-80)', 'var(--primary)','var(--primary)','var(--primary)'],
    stroke: {
      show: false,
      width:5
    },
    labels:['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه', 'پنجشنبه', 'جمعه'],
    fill: {
      type: ['pattern','solid','solid','solid','pattern','pattern','pattern'],
      pattern: {
        style: 'horizontalLines',
        width: 3,
        height: 5,
        strokeWidth: 1,
      },
    },
    dataLabels: {
      ...BaseApexChartOptions.dataLabels,
      offsetY: -15
    },
    tooltip: {
      x: {
        show:false
      },
      style: {
        fontSize: '1rem',
        fontFamily:'var(--fontFamily)'
      }
    },
    responsive: [
      {
        breakpoint: 400,
        options: {
          chart: {
            width: '95%',
            height: 350
          }
        }
      }
    ]
   
    

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
    chart: {
      ...BaseApexChartOptions.chart,
      height: 'auto',
      width: '100%'
    },
    labels: ['سری اول', 'سری دوم', 'سری سوم'],
    legend: {
      ...BaseApexChartOptions.legend,
      horizontalAlign: 'left',
      offsetX: -30,
      itemMargin: { horizontal: 5, vertical:0 },
   }
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
      name: 'لورم ایپسوم',
      data:[150,200,300,250,230]
    }],
    chart: {
      ...BaseApexChartOptions.chart,
      height: 'auto',
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
      // enabled:false,
      x: {
        show:false,
      },
      style: {
        ...BaseApexChartOptions.tooltip.style,
        fontSize: '0.8rem',
      }
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
      
      datasets: {
        doughnut: {
          borderRadius: 5,
          
        }
      }
    }
  }
  smallLineChart: ApexChartOptions = {
    ...BaseApexChartOptions,
    series: [{name: 'میزان رشد' , data: [15, 30, 50, 10, 5]}],
    chart: {
      ...BaseApexChartOptions.chart,
      type: 'line',
      height: 'auto',
      width: '150px'
    },
    grid: {
      show: false,
    },
    xaxis: {
      ...BaseApexChartOptions.xaxis,
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
    },
    tooltip: {
      style: {
        ...BaseApexChartOptions.tooltip.style,
        fontSize: '0.8rem',
      },
      x: {
        show: false
      },
      
    }

  }
  smallAreaChart: ApexChartOptions = {
    ...BaseApexChartOptions,
    chart: {
      ...BaseApexChartOptions.chart,
      type: 'area',
      height: 100,
      width: '100%'
    },
    series:[15,30]
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
         
        label: 'امتیاز',
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
      responsive: false,
      maintainAspectRatio: false
      
    }
  }

  chartPrimary: ApexChartOptions = {
    ...BaseApexChartOptions,
    series: [{ name: '', data: [60, 35, 45] }],
    colors: ['var(--primary-30)', 'var(--primary-50)'],
    chart: {
      ...BaseApexChartOptions.chart,
      height: '200',
      
    },
    plotOptions: {
      bar:{
        ...BaseApexChartOptions.plotOptions.bar,
        columnWidth: 55,
        distributed:true
        
      }

    },
    grid: {
      xaxis: {
        lines: {
          show:false
        }
      }
    },
    labels:['کاربر 1', 'کاربر 2', 'کاربر 3'],
    yaxis: {
      show: false,
      tickAmount: 3,
    },
    
    
    
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
    buttonColorType: 'highlight',
    leftIcon:true,
    buttonSize: 'xs',
    action: (customAction: any) => {
      console.log('TableAction')
    }
  }]
  handleTableAction(event: ITableActionEvent<any>) {
    event.action(event.data)
  }

  calendarData: CalendarData = new CalendarData();
  calendarLoadingData: boolean = false;
  onNavigateToDate(event: CalendarFilterDateViewModel) {
    this.calendarLoadingData = true;
    console.log(event.Month);
    setTimeout(() => {
      this.calendarLoadingData = false;
    },100)
  }
}
