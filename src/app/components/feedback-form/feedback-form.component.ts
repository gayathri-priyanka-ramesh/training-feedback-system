import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeedbackQuestionsService } from '../../Services/feedback-questions.service';
import { FeedbackResponse } from '../feedback-response-table/feedback-response-table.component';
import { FeedbackResponseService } from '../../Services/feedback-response.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
})
export class FeedbackFormComponent implements OnInit {
  // -------------------------Input Required Variables-------------------------
  @Input() formPreview: boolean;
  @Input() route: string;
  @Input() editRoute: string;
  // -------------------------End of Input Required Variables-------------------------

  // -------------------------Feedback Form Info-------------------------
  feedbackForm: FormGroup;
  trainingCount: number = 0;
  instructorCount: number = 0;
  additionalComment: boolean;
  anonymous: boolean;
  participantFeedbackResponseObj: FeedbackResponse = {
    id: '',
    name: '',
    module: 1,
    date: '',
    content: '',
    resources: '',
    organization: '',
    facilities: '',
    knowledge: '',
    explanation: '',
    discussion: '',
    environment: '',
    comments: '',
    instructorResponse: '',
    response: '',
  };
  idLength: string;
  // -------------------------End of Feedback Form Info-------------------------

  // -------------------------Feedback Form Info (Questions)-------------------------
  trainingQuestionsList: string[] = [];
  trainingQuestionIds: string[] = [
    'content',
    'resources',
    'organization',
    'facilities',
  ];
  instructorQuestionsList: string[] = [];
  instructorQuestionIds: string[] = [
    'knowledge',
    'explanation',
    'discussion',
    'environment',
  ];
  // -------------------------End of Feedback Form Info (Questions)-------------------------

  // -------------------------Modal Variables-------------------------
  modalMessage: string;
  modalConfirmMessage: string;
  modalButtonMessage: string;
  confirmModalMessage: string;
  confirmModalConfirmMessage: string;
  confirmModalButtonMessage: string;
  confirmRoute: string;
  successRoute: string;
  fragment: string = 'pageTitle';
  buttonRemove: boolean;
  // -------------------------End of Modal Variables-------------------------

  constructor(
    private formBuilder: FormBuilder,
    private feedbackQuestionsApi: FeedbackQuestionsService,
    private feedbackResponseApi: FeedbackResponseService
  ) {}

  // --------------------------------------------------Feedback Form--------------------------------------------------
  ngOnInit(): void {
    // -------------------------Retrieve Approval Details-------------------------
    this.getFeedbackQuestions();

    // -------------------------Set Feedback Form Info-------------------------
    this.confirmRoute = this.route;
    if (this.formPreview) {
      this.confirmModalConfirmMessage = 'View Course';
      this.confirmModalButtonMessage = 'No';
    }
    // -------------------------End of Set Feedback Form Info-------------------------
  }

  // --------------------------------------------------GET Feedback Form Details--------------------------------------------------
  getFeedbackQuestions() {
    this.feedbackQuestionsApi.getFeedbackQuestions().subscribe(
      (res) => {
        // -------------------------Form Values-------------------------
        console.log('GET Success  ---> ', res);
        this.anonymous = res[res.length - 1].anonymous;
        console.log('anonymous  ---> ', this.anonymous);
        this.additionalComment = res[res.length - 1].additionalComment;
        console.log('additionalComment  ---> ', this.additionalComment);
        let questionSets = res[res.length - 1].questionSets;
        console.log('questionSets  ---> ', questionSets);
        let trainingQuestionSet = questionSets[0].questions;

        // -------------------------Training Evaluation-------------------------
        console.log('trainingQuestionSet  ---> ', trainingQuestionSet);
        for (let ques of trainingQuestionSet) {
          console.log('ques  ---> ', ques);
          this.trainingQuestionsList.push(ques.questionText);
        }
        console.log('trainingQuestionsList  ---> ', this.trainingQuestionsList);
        this.trainingQuestionIds = this.trainingQuestionIds.concat(
          this.generateQuestionIds(
            'trainingQuesText',
            5,
            this.trainingQuestionsList.length
          )
        );
        console.log('trainingQuestionIds  ---> ', this.trainingQuestionIds);

        // -------------------------Instructor Evaluation-------------------------
        for (let ques of questionSets[1].questions) {
          this.instructorQuestionsList.push(ques.questionText);
        }
        console.log(
          'instructorQuestionsList  ---> ',
          this.instructorQuestionsList
        );
        this.instructorQuestionIds = this.instructorQuestionIds.concat(
          this.generateQuestionIds(
            'instructorQuesText',
            5,
            this.instructorQuestionsList.length
          )
        );
        console.log('instructorQuestionIds  ---> ', this.instructorQuestionIds);

        // -------------------------Form Initialization-------------------------
        this.initForm();
      },
      (error) => {
        console.log('GET Fail  ---> ', error);
        alert('GET not Success');
      }
    );
  }
  // --------------------------------------------------End of GET Feedback Form Details--------------------------------------------------

  // --------------------------------------------------Question ID Generation--------------------------------------------------
  generateQuestionIds(
    prefix: string,
    startIndex: number,
    count: number
  ): string[] {
    const questionIds: string[] = [];
    for (let i = 0; i < count - 4; i++) {
      questionIds.push(`${prefix}${startIndex + i}`);
    }
    return questionIds;
  }
  // --------------------------------------------------End of Question ID Generation--------------------------------------------------

  // --------------------------------------------------Form Initialization--------------------------------------------------
  private initForm(): void {
    this.feedbackForm = this.formBuilder.group({
      anonymous: [false],
      ...this.generateFormControls(this.trainingQuestionIds),
      ...this.generateFormControls(this.instructorQuestionIds),
      comments: [''],
    });
    console.log('Form Initialized');
  }
  // -------------------------Dynamic Control Generation-------------------------
  private generateFormControls(questionIds: string[]): { [key: string]: any } {
    const controls: { [key: string]: any } = {};
    questionIds.forEach((id) => {
      controls[id] = [''];
    });
    console.log('Controls  ---> ', controls);
    return controls;
  }
  // --------------------------------------------------End of Form Initialization--------------------------------------------------

  // --------------------------------------------------Form Submission--------------------------------------------------
  onSubmit(): void {
    // -------------------------Training Evaluation-------------------------
    this.trainingCount = 0;
    for (let i of this.trainingQuestionIds) {
      const ans = this.feedbackForm.value[i];
      console.log('Value of', i, ' ---> ', ans);
      if (ans) this.trainingCount++;
    }
    console.log('Training Count  ---> ', this.trainingCount);

    // -------------------------Instructor Evaluation-------------------------
    this.instructorCount = 0;
    for (let i of this.instructorQuestionIds) {
      const ans = this.feedbackForm.value[i];
      console.log('Value of', i, ' ---> ', ans);
      if (ans) this.instructorCount++;
    }
    console.log('Instructor Count  ---> ', this.instructorCount);

    // -------------------------Valid Feedback Response-------------------------
    if (this.trainingCount >= 2 && this.instructorCount >= 2) {
      this.modalMessage =
        "Your feedback has been successfully submitted! Please wait for your Instructor's response!";
      this.modalButtonMessage = 'View Course';
      this.successRoute = this.confirmRoute;
      console.log('Form is valid  ---> ', this.feedbackForm);
      console.log('values  ---> ', this.feedbackForm.value);
      this.getFeedbackResponse();
    }

    // -------------------------Invalid Feedback Response-------------------------
    else {
      this.modalMessage =
        'Answer at least 2 questions in the first 2 sections to submit your feedback';
      this.modalButtonMessage = 'Answer Questions';
      console.log('Form is invalid  ---> ', this.feedbackForm);
      console.log('values  ---> ', this.feedbackForm.value);
    }
  }
  // --------------------------------------------------End of Form Submission--------------------------------------------------

  // --------------------------------------------------GET Current Feedback Responses--------------------------------------------------
  getFeedbackResponse() {
    this.feedbackResponseApi.getFeedbackResponseData().subscribe(
      (res: any) => {
        console.log('GET Success  ---> ', res);
        this.idLength = String(res.length);
        console.log('idLength  ---> ', this.idLength);
        this.postFeedbackResponse();
      },
      (error) => {
        console.log('GET Fail  ---> ', error);
        alert('GET not Success');
      }
    );
  }
  // --------------------------------------------------End of GET Current Feedback Responses--------------------------------------------------

  // --------------------------------------------------POST Submitted Feedback Response--------------------------------------------------
  postFeedbackResponse() {
    // -------------------------Set Response Values-------------------------
    this.participantFeedbackResponseObj.id = this.idLength;
    if (this.feedbackForm.value.anonymous) {
      this.participantFeedbackResponseObj.name = 'Anonymous';
    } else {
      this.participantFeedbackResponseObj.name = sessionStorage.getItem(
        'userName'
      ) as string;
    }
    this.participantFeedbackResponseObj.date = this.getCurrentDate();
    this.participantFeedbackResponseObj.content =
      this.feedbackForm.value.content;
    this.participantFeedbackResponseObj.resources =
      this.feedbackForm.value.resources;
    this.participantFeedbackResponseObj.organization =
      this.feedbackForm.value.organization;
    this.participantFeedbackResponseObj.facilities =
      this.feedbackForm.value.facilities;
    this.participantFeedbackResponseObj.knowledge =
      this.feedbackForm.value.knowledge;
    this.participantFeedbackResponseObj.explanation =
      this.feedbackForm.value.explanation;
    this.participantFeedbackResponseObj.discussion =
      this.feedbackForm.value.discussion;
    this.participantFeedbackResponseObj.environment =
      this.feedbackForm.value.environment;
    this.participantFeedbackResponseObj.comments =
      this.feedbackForm.value.comments;
    console.log(
      'participantFeedbackResponseObj  ---> ',
      this.participantFeedbackResponseObj
    );

    // -------------------------POST Feedback Response-------------------------
    this.feedbackResponseApi
      .postFeedbackResponseData(this.participantFeedbackResponseObj)
      .subscribe(
        (res) => {
          console.log('POST Success  ---> ', res);
          this.feedbackForm.reset();
        },
        (error) => {
          console.log('POST Fail  ---> ', error);
          alert('POST not Success');
        }
      );
  }

  // -------------------------Get Current Submitted Date------------------------
  getCurrentDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
  }
  // --------------------------------------------------End of POST Submitted Feedback Response--------------------------------------------------

  // --------------------------------------------------Form Preview Buttons--------------------------------------------------
  // -------------------------Save as Draft-------------------------
  saveDraft() {
    this.modalMessage =
      'Are you sure to save your questions as draft? It can be edited until upload';
    this.modalConfirmMessage = 'Yes, Save Draft';
    this.modalButtonMessage = "No, Don't Save";
    this.confirmModalMessage =
      'You questions are saved as draft. Do you want to view the course?';
  }
  // -------------------------Upload Form-------------------------
  uploadForm() {
    this.modalMessage =
      'Are you sure to upload the Feedback Form? It cannot be editted further';
    this.modalConfirmMessage = 'Upload';
    this.modalButtonMessage = 'Cancel';
    this.confirmModalMessage =
      "Your Form has been uploaded! Wait for Participant's Response";
  }
  // -------------------------Remove the Chosen Button-------------------------
  removeButton() {
    this.buttonRemove = true;
  }
  // --------------------------------------------------End of Form Preview Buttons--------------------------------------------------
  // --------------------------------------------------End of Feedback Form--------------------------------------------------
}
