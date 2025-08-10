import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ActiveElement, ChartConfiguration, ChartEvent, ChartOptions } from 'chart.js';
import { ChartjsOption } from '../../../core/types/chartjs-option';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chartjs',
  standalone:false,
  templateUrl: './chartjs.component.html',
  styleUrl: './chartjs.component.scss'
})
export class ChartjsComponent {
  @ViewChild('BaseChartDirective') chart?: BaseChartDirective;
  @Input() chartType: 'line' | 'bar' | 'doughnut' | 'radar' | 'pie' | 'polarArea' | 'bubble' | 'scatter'   = 'bar';
  @Input() width?:number = 100
  @Input() chartjsOptions!: ChartjsOption;

  @Output() chartClickEvent = new EventEmitter<ActiveElement[]>();
  @Output() chartHoverEvent = new EventEmitter<ActiveElement[]>();

   chartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [],
  };

  chartOptions: ChartOptions = {
    responsive: true,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartjsOptions'] && this.chartjsOptions) {
      this.chartData = {
        labels: this.chartjsOptions.labels,
        datasets: this.chartjsOptions.configuration,
      };
      this.chartOptions = this.chartjsOptions.options || { responsive: true };

      // Trigger chart update if already initialized
      if (this.chart) {
        this.chart.update();
      }
    }
  }

  onChartClick(event: { event?: ChartEvent; active?: unknown[] }): void {
    const activeElements = event.active as ActiveElement[] | undefined;
    if (event.active && event.active.length > 0) {
      this.chartClickEvent.emit(activeElements);
    }
  }

  onChartHover(event: { event?: ChartEvent; active?: unknown[] }): void {
    const activeElements = event.active as ActiveElement[] | undefined;
    this.chartHoverEvent.emit(activeElements);
  }

}
