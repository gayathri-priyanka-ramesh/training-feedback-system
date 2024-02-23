import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackQuestionsService {
  // --------------------------------------------------Feedback Questions Data Store--------------------------------------------------
  private feedbackQuestionsUrl = 'http://localhost:3000/feedbackQuestions/';

  constructor(private http: HttpClient) {}

  // --------------------------------------------------POST Feedback Questions--------------------------------------------------
  postFeedbackQuestions(data: any) {
    return this.http.post<any>(this.feedbackQuestionsUrl, data).pipe(
      map((result: any) => {
        console.log('-----POST-----');
        console.log('Result  ---> ', result);
        return result;
      }),
      catchError((error: any) => {
        console.log('-----POST Error-----');
        console.log('Error  ---> ', error);
        return throwError(error);
      })
    );
  }
  // --------------------------------------------------End of POST Feedback Questions--------------------------------------------------

  // --------------------------------------------------GET Feedback Questions--------------------------------------------------
  getFeedbackQuestions() {
    return this.http.get<any>(this.feedbackQuestionsUrl).pipe(
      map((result: any) => {
        console.log('-----GET-----');
        console.log('Result  ---> ', result);
        return result;
      }),
      catchError((error: any) => {
        console.log('-----GET Error-----');
        console.log('Error  ---> ', error);
        return throwError(error);
      })
    );
  }
  // --------------------------------------------------End of GET Feedback Questions--------------------------------------------------

  // --------------------------------------------------PUT Feedback Questions--------------------------------------------------
  editFeedbackQuestions(data: any, id: string) {
    return this.http.put<any>(this.feedbackQuestionsUrl + id, data).pipe(
      map((result: any) => {
        console.log('-----PUT-----');
        console.log('Result  ---> ', result);
        return result;
      }),
      catchError((error: any) => {
        console.log('-----PUT Error-----');
        console.log('Error  ---> ', error);
        return throwError(error);
      })
    );
  }
  // --------------------------------------------------End of PUT Feedback Questions--------------------------------------------------
}
