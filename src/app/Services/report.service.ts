import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  // --------------------------------------------------Report Data--------------------------------------------------
  getFeedbackData(): Observable<any> {
    const feedbackData = {
      labels: [
        'Maria White',
        'Jonathan Turner',
        'Rachel Walker',
        'John Baker',
        'Samuel Thomas',
        'David Foster',
        'Emily Carter',
        'Lisa Smith',
        'Kevin Young',
        'Jessica Evans',
      ],
      trainingRating: [
        'Average',
        'Excellent',
        'Above Average',
        'Below Average',
        'Poor',
        'Above Average',
        'Excellent',
        'Below Average',
        'Average',
        'Poor',
      ],
      instructorRating: [
        'Above Average',
        'Below Average',
        'Poor',
        'Average',
        'Above Average',
        'Excellent',
        'Below Average',
        'Excellent',
        'Average',
        'Poor',
      ],
    };
    return of(feedbackData);
  }
  // --------------------------------------------------End of Report Data--------------------------------------------------

  constructor() {}
}
