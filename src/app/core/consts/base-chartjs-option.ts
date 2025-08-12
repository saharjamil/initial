import { ChartjsOption } from "../types/chartjs-option";
const fontFamily = 'Peyda';

export const BaseChartjsOption: ChartjsOption = {
    labels: [],
    configuration: [],
    options: {
        plugins: {
            title: {
                font: {
                    family: fontFamily
                }
            },
            tooltip: {
                bodyFont: {
                    family: fontFamily,
                    size: 14
                },
                bodyAlign: 'right',
                titleAlign: 'right',
                backgroundColor: '#fff',
                bodyColor: "#000",
                titleColor:"#000",
                titleFont: {
                    family: fontFamily,
                    size: 16,
                    weight: 400
                },
                caretSize: 5,
                position:'average',

                displayColors: false,
            },
            legend: {
                rtl: true,
                position: 'bottom',
                // maxHeight:10,
                labels: {
                    // pointStyle: 'rect',
                    // usePointStyle: true,
                    // pointStyleWidth: 20,
                    color: '#404040',
                    boxWidth: 25,
                    boxHeight: 8,
                    font: {
                        family: fontFamily,
                        size: 14,
                        weight: 500,
                        
                    }
                    
                }
            }
        },
        elements: {
            bar: {
                borderWidth: 1,
                borderRadius: 5,
               
            },
            
        },
        scales: {
            x: {
                stacked: false,
                ticks: {
                    font: {
                        family: fontFamily
                    }
                },
            },
            y: {
                stacked: false,
                ticks: {
                    font: {
                        family: fontFamily
                    },
                }
            }
        },
        aspectRatio: 1,
        datasets: {
            doughnut: {
                hoverBorderWidth: 2,
                borderColor: '#fff',
                borderWidth: 5,
                borderRadius: 15,

            },
            bar: {
                maxBarThickness: 30,
                pointStyle: 'circle',
                
                
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
}