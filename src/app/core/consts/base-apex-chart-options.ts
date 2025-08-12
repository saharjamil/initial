import { style } from "@angular/animations";
import { ApexChartOptions } from "../types/apex-chart-option";

export const BaseApexChartOptions: ApexChartOptions = {
  series:[],
  chart: {
    type: "bar",
    height: '400px',
    // width: '100%',
    stacked: false,
    redrawOnWindowResize: true,
    redrawOnParentResize: true,
    toolbar: { show: false },
    zoom: { enabled: false },
    fontFamily: 'IranYekan',
    foreColor: 'var(--bs-gray-700)',

  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30px",
      borderRadius: 5,
      borderRadiusApplication: "around",
      borderRadiusWhenStacked: "last",
      isDumbbell: true,
      dataLabels: { position: "center" },
    },
    pie: {
      expandOnClick: false,
      donut: {
          size: '65%'
        }
    }
  },
  colors: [
    "var(--primary)",
    "var(--secondary)",
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
  dataLabels: {
    textAnchor: "middle",
    offsetY: 0,
    style: { colors: ["#000"], fontSize: "0.8rem", fontFamily: "var(--fontFamily)", fontWeight: 500 },
    dropShadow: {
      enabled: false,

    }
  },
  stroke: {
    show: true,
    width: 5,
    colors: ["transparent"],
  },
  grid: {
    show: true,
    
    borderColor: 'var(--gray-light-100)',
    strokeDashArray: 5,
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } },
    padding: { left: 10, right: 10 },
    // row: {
    //   colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    //   opacity: 0.8
    // },
  },
  xaxis: {
    labels: {
      rotate: 0,
      rotateAlways: false,
      hideOverlappingLabels: false,
      trim: true,
      
      style: {
        fontFamily: "var(--fontFamily)",
        fontSize: "0.9rem",
        cssClass: 'custom-apex-chart-xaxis-style',
      },
    },

  },
  yaxis: {
    show: true,
    forceNiceScale: true,
    min: 0,
    decimalsInFloat: 0,
    // tickAmount: 5,
    labels: {
      style: { fontFamily: "var(--fontFamily)", fontSize: "0.95rem" },
      offsetX: -10,
      offsetY:3
    },
    axisTicks: {
          show: true,
          color: '#78909C',
          width: 6,
          offsetX: 0,
          offsetY: -3
      },
  },
  legend: {
    position: "top",
    horizontalAlign: "center",
    fontFamily: "var(--fontFamily)",
    fontSize: "14px",
    fontWeight: 500,
    labels: { colors: "var(--nutral-50)" },
    markers: { strokeWidth: 3, shape:'circle'  },
    itemMargin: { horizontal: 10 },
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: "1rem",
      fontFamily: "var(--fontFamily)"
    },
    hideEmptySeries: false,
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      
      const title   = w.config.labels[seriesIndex];
      const color = w.config.colors[seriesIndex];
      const value = dataPointIndex != null ? series[seriesIndex][dataPointIndex] : series[seriesIndex];
      return `<div class="custom-chart-tooltip-style">
        <div class="title" style="background-color:rgb(from ${color} r g b / 0.5)">${title}</div>
        <div class="content">${value}</div>
      </div>`
    }
  },
  annotations: {},
  title: {},
  theme: {},
  markers: {},
  responsive: [
    {
      breakpoint: 575,
      options: {
        xaxis: {
          offsetY: 30,
          offsetX:-30,
          labels: {
            rotate: -45
            
          },
          style: {
            
          }
          
        }
      }
    }
  ],
  fill: {},
  labels: [],
  subtitle: {},
};


