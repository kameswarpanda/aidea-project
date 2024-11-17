import { Component , AfterViewInit } from '@angular/core';
import { Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend, } from 'chart.js';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent implements AfterViewInit {
  progressChart: any;

  constructor() {
    // Register Chart.js components
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
  }

  ngAfterViewInit() {
    this.renderProgressChart();
  }

  renderProgressChart() {
    const ctx = document.getElementById('progressChart') as HTMLCanvasElement;
    this.progressChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'In Progress', 'Pending'],
        datasets: [
          {
            data: [70, 20, 10],
            backgroundColor: ['#1e88e5', '#ffb74d', '#e57373'],
            hoverBackgroundColor: ['#1565c0', '#ffa726', '#ef5350'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });
  }

}
