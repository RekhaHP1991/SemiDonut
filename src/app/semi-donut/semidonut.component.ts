import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ISemiDonut } from './semi-donut';
import { RestApiService } from './semi-donut-api-service';

@Component({
  selector: 'app-semi-donut',
  templateUrl: './semidonut.component.html',
  styleUrls: ['./semidonut.component.css']
})
export class SemiDonutComponent implements OnInit {
  errorMessage: any;
  _donutData = '';
  chartOptions: any;
  semiDonut: ISemiDonut;

  ngOnInit(): void {
    this.semiDonutService.getData().subscribe({
      next: semiDonut => {
        this.semiDonut = semiDonut;
      this.getHighChart(semiDonut)
      },
      error: err => this.errorMessage = err
    });
  }

  // Display chart options
  getHighChart(chartValue: ISemiDonut): void {
    console.log(chartValue.data);
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotShadow: false,
        backgroundColor: null,
        width: 456,
        height: 200,
        justifyContent: "center"
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false
      },
      colors: ['#FFFFFF', '#D3D3D3'],

      title: {
        style: {
          color: 'white',
          font: '35px sans-serif'
        },
        text: chartValue.data.title,
        align: 'center',
        verticalAlign: 'middle',
        y: 40,
        x: -80
      },
      subtitle: {
        style: {
          color: 'white',
          font: '12px sans-serif',
        },
        text: chartValue.data.header,
        align: 'center',
        verticalAlign: 'middle',
        y: 48,
        x: -80
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['30%', '80%'],
          size: '120%',
        }
      },
      series: [{
        type: 'pie',
        name: 'Power Generation',
        innerSize: '95%',
        data:
        chartValue.data.chartData.map(val => {
            return { name: val.name, y: val.value }
          }),
      }]
    };
  }

  constructor(private semiDonutService: RestApiService) { }

  highcharts = Highcharts;
}
