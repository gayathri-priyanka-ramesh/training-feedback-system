import { Component, OnInit, Input } from '@angular/core';
import { FeedbackResponseService } from '../../Services/feedback-response.service';

@Component({
  selector: 'app-feedback-response-table',
  templateUrl: './feedback-response-table.component.html',
})
export class FeedbackResponseTableComponent implements OnInit {
  // -------------------------Input Required Variables-------------------------
  @Input() responseDataAdminView: boolean;
  @Input() responseDataInstructorView: boolean;
  @Input() responseDataParticipantView: boolean;
  @Input() confirmRoute: string;
  // -------------------------End of Input Required Variables-------------------------

  // -------------------------Response Table Info-------------------------
  feedbackResponseObj: FeedbackResponse = new FeedbackResponse();
  feedbackResponseDataStore!: FeedbackResponse[];
  // -------------------------End of Response Table Info-------------------------

  // -------------------------Save Response Info-------------------------
  responseCell: HTMLTableCellElement;
  responsesSaved: boolean = false;
  // -------------------------End of Save Response Info-------------------------

  // -------------------------Modal Variables-------------------------
  modalMessage: string =
    'Are sure to save the responses? This action cannot be undone!';
  modalConfirmMessage: string = 'Yes, Save';
  modalButtonMessage: string = 'No';
  confirmModalMessage: string =
    'Your Responses are saved successfully for the participants to view! Do you wish to view the feedback report?';
  confirmModalConfirmMessage: string = 'Yes, View Report';
  confirmModalButtonMessage: string = 'No';
  confirmFragment: string = 'pageTitle';
  // -------------------------End of Modal Variables-------------------------

  constructor(private feedbackResponseApi: FeedbackResponseService) {}

  ngOnInit(): void {
    // -------------------------Retrieve Response Details-------------------------
    this.getFeedbackResponse();
  }

  // --------------------------------------------------GET Response Details--------------------------------------------------
  getFeedbackResponse() {
    this.feedbackResponseApi.getFeedbackResponseData().subscribe(
      (res) => {
        this.feedbackResponseDataStore = res;
        console.log('GET Success  ---> ', this.feedbackResponseDataStore);
      },
      (error) => {
        console.log('GET Fail  ---> ', error);
        alert('GET not Success');
      }
    );
  }
  // --------------------------------------------------End of GET Response Details--------------------------------------------------

  // --------------------------------------------------PUT Response Details--------------------------------------------------
  editFeedbackResponse() {
    if (!this.responsesSaved) {
      console.log('Response Save Confirm Clicked');
      this.feedbackResponseDataStore.forEach((feedbackResponse, index) => {
        console.log('Response  ---> ', feedbackResponse);
        // -------------------------Instructor Response Cell-------------------------
        this.responseCell = document.getElementById(
          `response-cell-${index}`
        ) as HTMLTableCellElement;
        console.log('Response Cell', this.responseCell);

        // -------------------------Instructor Response Value-------------------------
        const responseValue: string = this.getResponseValue(index);
        console.log('Response Value  ---> ', responseValue);

        // -------------------------Update Instructor Response Value-------------------------
        this.feedbackResponseDataStore[index].response = responseValue;
        this.feedbackResponseApi
          .editFeedbackResponseData(
            this.feedbackResponseDataStore[index],
            index
          )
          .subscribe(
            (res) => {
              console.log('PUT Success  ---> ', res);
              this.getFeedbackResponse();
            },
            (error) => {
              console.log('PUT Fail  ---> ', error);
              alert('PUT not successful');
            }
          );
      });
      // -------------------------Responses Saved-------------------------
      this.responsesSaved = true;
      console.log('Responses are Saved');
      console.log(
        'FeedbackResponseDataStore  ---> ',
        this.feedbackResponseDataStore
      );
    }
  }
  // --------------------------------------------------End of PUT Response Details--------------------------------------------------

  // --------------------------------------------------Set Instructor Response Data--------------------------------------------------
  getResponseValue(index: number): string {
    console.log('Index  ---> ', index);
    const textarea = document.getElementById(
      `response-${index}`
    ) as HTMLTextAreaElement;
    console.log('Textarea  ---> ', textarea);
    console.log('Textarea Value  ---> ', textarea.value);
    return textarea.value;
  }
  // --------------------------------------------------End of Set Instructor Response Data--------------------------------------------------
}

// -------------------------Feedback Response Table Properties-------------------------
export class FeedbackResponse {
  id: string;
  module: number;
  name: string;
  date: string;
  content: string;
  resources: string;
  organization: string;
  facilities: string;
  knowledge: string;
  explanation: string;
  discussion: string;
  environment: string;
  comments: string;
  response: string;
  instructorResponse: string;
}
// -------------------------End of Feedback Response Table Properties-------------------------
