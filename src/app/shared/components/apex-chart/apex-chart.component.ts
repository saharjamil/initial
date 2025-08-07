import { Component, Input } from '@angular/core';
import { ChartOptions } from '../../../core/types/chart-option';

@Component({
  selector: 'app-apex-chart',
  standalone:false,
  templateUrl: './apex-chart.component.html',
  styleUrl: './apex-chart.component.scss'
})
export class ApexChartComponent {
  @Input() chartOptions!: ChartOptions;
}
