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
        'Excellent',
        'Above Average',
        'Excellent',
        'Average',
        'Above Average',
        'Below Average',
        'Below Average',
        'Poor',
        'Average',
        'Poor',
      ],
      instructorRating: [
        'Excellent',
        'Excellent',
        'Above Average',
        'Average',
        'Average',
        'Below Average',
        'Poor',
        'Below Average',
        'Above Average',
        'Poor',
      ],
    };
    return of(feedbackData);
  }
  // --------------------------------------------------End of Report Data--------------------------------------------------

  constructor() {}
}
