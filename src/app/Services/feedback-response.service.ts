import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackResponseService {
  // --------------------------------------------------Feedback Response Data Store--------------------------------------------------
  private feedbackResponseUrl = 'http://localhost:3000/feedbackResponse/';

  constructor(private http: HttpClient) {}

  // --------------------------------------------------GET Feedback Response--------------------------------------------------
  getFeedbackResponseData() {
    return this.http.get<any>(this.feedbackResponseUrl).pipe(
      map((result: any) => {
        console.log('-----GET-----');
        console.log('Result  ---> ', result);
        return result;
      })
    );
  }
  // --------------------------------------------------End of GET Feedback Response--------------------------------------------------

  // --------------------------------------------------PUT Feedback Response--------------------------------------------------
  editFeedbackResponseData(data: any, id: number) {
    return this.http.put<any>(this.feedbackResponseUrl + id, data).pipe(
      map((result: any) => {
        console.log('-----PUT-----');
        console.log('Result  ---> ', result);
        return result;
      })
    );
  }
  // --------------------------------------------------End of PUT Feedback Response--------------------------------------------------

  // --------------------------------------------------End of POST Feedback Response--------------------------------------------------
  postFeedbackResponseData(data: any) {
    return this.http.post<any>(this.feedbackResponseUrl, data).pipe(
      map((result: any) => {
        console.log('-----POST-----');
        console.log('Result  ---> ', result);
        return result;
      })
    );
  }
  // --------------------------------------------------End of POST Feedback Response--------------------------------------------------
}
