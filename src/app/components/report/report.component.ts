import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../Services/report.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-report',
  // --------------------------------------------------Report Area--------------------------------------------------
  template: `
    <h2>Feedback Report</h2>
    <!-- -------------------------Sub Reports------------------------- -->
    <div class="sub-reports d-flex">
      <!-- -------------------------Report1------------------------- -->
      <div class="sub-report d-flex flex-column">
        <h3>Training Evaluation</h3>
        <canvas id="training-evaluation"></canvas>
      </div>
      <!-- -------------------------Report2------------------------- -->
      <div class="sub-report d-flex flex-column">
        <h3>Instructor Evaluation</h3>
        <canvas id="instructor-evaluation"></canvas>
      </div>
    </div>
    <!-- -------------------------End of Sub Reports------------------------- -->
    <!-- -------------------------Main Report------------------------- -->
    <div class="main-report d-flex flex-column">
      <h3>Overall Evaluation</h3>
      <canvas id="overall-evaluation"></canvas>
    </div>
    <!-- -------------------------End of Main Report------------------------- -->
  `,
  // --------------------------------------------------End of Report Area--------------------------------------------------
})
export class ReportComponent implements OnInit {
  constructor(private reportService: ReportService) {}

  // --------------------------------------------------Chart Info--------------------------------------------------
  color: string[] = ['#1c375f', '#4c6181', '#7c8ba3', '#abb5c4', '#dbdfe6'];
  // --------------------------------------------------End of Chart Info--------------------------------------------------

  ngOnInit(): void {
    // --------------------------------------------------Report Data Retrieval and Generation of Charts--------------------------------------------------
    this.reportService.getFeedbackData().subscribe((feedbackData) => {
      this.generateTrainingEvaluationChart(feedbackData.trainingRating);
      this.generateInstructorEvaluationChart(feedbackData.instructorRating);
      this.generateOverallEvaluationChart(feedbackData);
    });
    // --------------------------------------------------End of Report Data Retrieval and Generation of Charts--------------------------------------------------
  }

  // --------------------------------------------------Training Evaluation--------------------------------------------------
  private generateTrainingEvaluationChart(trainingRating: string[]): void {
    if (typeof document !== 'undefined') {
      var trainingEvaluation = document.getElementById(
        'training-evaluation'
      ) as HTMLCanvasElement;
      new Chart(trainingEvaluation, {
        type: 'doughnut',
        data: {
          labels: Array.from(new Set(trainingRating)),
          datasets: [
            {
              data: [35, 45, 55, 25, 15],
              backgroundColor: this.color,
              hoverOffset: 6,
            },
          ],
        },
      });
      // console.log('Training Evaluation Chart Generated');
    } else {
      // console.log('Document is not available');
    }
  }
  // --------------------------------------------------End of Training Evaluation--------------------------------------------------

  // --------------------------------------------------Instructor Evaluation--------------------------------------------------
  private generateInstructorEvaluationChart(instructorRating: string[]): void {
    if (typeof document !== 'undefined') {
      var instructorEvaluation = document.getElementById(
        'instructor-evaluation'
      ) as HTMLCanvasElement;
      new Chart(instructorEvaluation, {
        type: 'pie',
        data: {
          labels: Array.from(new Set(instructorRating)),
          datasets: [
            {
              data: [25, 50, 50, 15, 25],
              backgroundColor: this.color,
              hoverOffset: 6,
            },
          ],
        },
      });
      // console.log('Instructor Evaluation Chart Generated');
    } else {
      // console.log('Document is not available');
    }
  }
  // --------------------------------------------------End of Instructor Evaluation--------------------------------------------------

  // --------------------------------------------------Overall Evaluation--------------------------------------------------
  private generateOverallEvaluationChart(feedbackData: any): void {
    if (typeof document !== 'undefined') {
      var overallEvaluation = document.getElementById(
        'overall-evaluation'
      ) as HTMLCanvasElement;
      new Chart(overallEvaluation, {
        type: 'bar',
        data: {
          labels: feedbackData.labels,
          datasets: [
            {
              label: 'Training Rating',
              data: feedbackData.trainingRating.map(this.getRatingValue),
              backgroundColor: this.color[0],
            },
            {
              label: 'Instructor Rating',
              data: feedbackData.instructorRating.map(this.getRatingValue),
              backgroundColor: this.color[3],
            },
          ],
        },
        options: {
          scales: {
            x: {
              stacked: true,
              beginAtZero: true,
            },
            y: {
              stacked: true,
              beginAtZero: true,
            },
          },
        },
      });
      // console.log('Overall Evaluation Chart Generated');
    } else {
      // console.log('Document is not available');
    }
  }
  // --------------------------------------------------End of Overall Evaluation--------------------------------------------------

  // -------------------------Rating Value-------------------------
  private getRatingValue(rating: string): number {
    switch (rating) {
      case 'Poor':
        return 1;
      case 'Below Average':
        return 2;
      case 'Average':
        return 3;
      case 'Above Average':
        return 4;
      case 'Excellent':
        return 5;
      default:
        return 0;
    }
  }
  // -------------------------End of Rating Value-------------------------
}
