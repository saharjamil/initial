import { Component, Input } from '@angular/core';
import { ApexChartOptions } from '../../../core/types/apex-chart-option';

@Component({
  selector: 'app-apex-chart',
  standalone:false,
  templateUrl: './apex-chart.component.html',
  styleUrl: './apex-chart.component.scss'
})
export class ApexChartComponent {
  @Input() chartOptions!: ApexChartOptions;
}
