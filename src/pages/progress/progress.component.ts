import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'] // Fixed typo in 'styleUrls'
})
export class ProgressComponent implements AfterViewInit {
  progressChart: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Register Chart.js components
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Ensure the code runs only in the browser
      this.renderProgressChart();
    }
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
