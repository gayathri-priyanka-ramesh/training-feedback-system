import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicantApprovalService {
  // --------------------------------------------------Applicant Data Store--------------------------------------------------
  private applicantUrl = 'http://localhost:3000/applicant/';

  constructor(private http: HttpClient) {}

  // --------------------------------------------------GET Approval Data--------------------------------------------------
  getApprovalData() {
    return this.http.get<any>(this.applicantUrl).pipe(
      map((result: any) => {
        console.log('-----GET-----');
        console.log('Result  ---> ', result);
        return result;
      })
    );
  }
  // --------------------------------------------------End of GET Approval Data--------------------------------------------------

  // --------------------------------------------------EDIT Approval--------------------------------------------------
  editApproval(data: any, id: number) {
    return this.http.put<any>(this.applicantUrl + id, data).pipe(
      map((result: any) => {
        console.log('-----Edit-----');
        console.log('Result  ---> ', result);
        return result;
      })
    );
  }
  // --------------------------------------------------End of EDIT Approval--------------------------------------------------
}
