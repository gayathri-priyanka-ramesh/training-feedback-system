import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { FeedbackQuestionsService } from '../../Services/feedback-questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-questions',
  templateUrl: './feedback-questions.component.html',
})
export class FeedbackQuestionsComponent implements OnInit, AfterViewInit {
  // -------------------------Input Required Variables-------------------------
  @Input() editFeedback: boolean;
  @Input() route: string;
  // -------------------------End of Input Required Variables-------------------------

  // -------------------------Feedback Question Form Info-------------------------
  questionsForm: FormGroup;
  legend: string[] = ['Training Evaluation', 'Instructor Evaluation'];
  emptyQuestionField: boolean = false;
  validQuestionLength: boolean = true;
  requiredQuestionForm: any;
  trainingQuesCnt: number = 2;
  instructorQuesCnt: number = 2;
  // -------------------------End of Feedback Question Form Info-------------------------

  // -------------------------Modal Variables-------------------------
  modalMessage: string;
  modalConfirmMessage: string;
  modalButtonMessage: string;
  removeIndex: number[];
  noReconfirmModal: boolean = true;
  submitResultButton: HTMLButtonElement;
  validForm: boolean;
  // -------------------------End of Modal Variables-------------------------

  constructor(
    private formBuilder: FormBuilder,
    private feedbackQuestionApi: FeedbackQuestionsService
  ) {}

  // --------------------------------------------------Feedback Question Form--------------------------------------------------
  ngOnInit(): void {
    // -------------------------Set Feedback Question Form Values-------------------------
    if (this.editFeedback) {
      this.getFeedbackQuestions();
    } else {
      this.initializeForm();
    }
    // -------------------------End of Set Feedback Question Form Values-------------------------
  }

  // --------------------------------------------------GET Feedback Question Form Values--------------------------------------------------
  getFeedbackQuestions() {
    this.feedbackQuestionApi.getFeedbackQuestions().subscribe(
      (res) => {
        // console.log('GET Success  ---> ', res);
        this.requiredQuestionForm = res[res.length - 1];
        // console.log('requiredQuestionForm  ---> ', this.requiredQuestionForm);
        let trainingQuestionSet = this.requiredQuestionForm.questionSets[0];
        // console.log('trainingQuestionSet  ---> ', trainingQuestionSet);
        let trainingQuestions: FormArray = trainingQuestionSet.questions;
        // console.log('trainingQuestions  ---> ', trainingQuestions);
        this.trainingQuesCnt = trainingQuestions.length;
        // console.log('trainingQuesCnt  ---> ', this.trainingQuesCnt);
        this.instructorQuesCnt =
          this.requiredQuestionForm.questionSets[1].questions.length;
        // console.log('instructorQuesCnt  ---> ', this.instructorQuesCnt);

        // -------------------------Form Initialization-------------------------
        this.initializeForm();

        // -------------------------Load Form Values-------------------------
        this.loadFeedbackQuestionValue();
      },
      (error) => {
        // console.log('GET Fail  ---> ', error);
        alert('GET not Success');
      }
    );
  }
  // --------------------------------------------------End of GET Feedback Question Form Values--------------------------------------------------

  // --------------------------------------------------Form Initialization--------------------------------------------------
  initializeForm() {
    this.questionsForm = this.formBuilder.group({
      anonymous: [true],
      additionalComment: [true],
      ratingRange: ['', Validators.required],
      questionSets: this.formBuilder.array([
        this.createQuestionSet(this.trainingQuesCnt),
        this.createQuestionSet(this.instructorQuesCnt),
      ]),
    });
    // console.log('Questions Form initialized ---> ', this.questionsForm);
  }
  // --------------------------------------------------End of Form Initialization--------------------------------------------------

  get formFields() {
    return this.questionsForm.controls;
  }

  // --------------------------------------------------Load Form Values--------------------------------------------------
  loadFeedbackQuestionValue() {
    this.questionsForm.patchValue(this.requiredQuestionForm);
  }
  // --------------------------------------------------End of Load Form Values--------------------------------------------------

  ngAfterViewInit(): void {
    // -------------------------Form Submit Button-------------------------
    this.submitResultButton = document.getElementById(
      'submitResult'
    ) as HTMLButtonElement;
    // console.log('Question Form Data ---> ', this.requiredQuestionForm);
  }

  // --------------------------------------------------Fieldsets Action--------------------------------------------------
  // -------------------------Get Questionsets-------------------------
  get questionSets(): FormArray {
    return this.questionsForm.get('questionSets') as FormArray;
  }

  // -------------------------Get Questions Array-------------------------
  getQuestionsArray(questionSet: AbstractControl): FormArray | null {
    return questionSet.get('questions') as FormArray | null;
  }

  // -------------------------Create Question Set-------------------------
  createQuestionSet(quesCnt: number): FormGroup {
    // console.log('QuestionSet created with', quesCnt, 'questions');
    const questionsArray: any = this.formBuilder.array([]);
    for (let i = 0; i < quesCnt; i++) {
      questionsArray.push(this.createQuestion());
    }
    return this.formBuilder.group({
      questions: questionsArray,
    });
  }

  // -------------------------Create Question Field-------------------------
  createQuestion(): FormGroup {
    return this.formBuilder.group({
      questionText: ['', Validators.required],
    });
  }

  // -------------------------Add Question Field-------------------------
  addQuestion(index: number) {
    const questionSetToAdd = this.questionSets.at(index);
    const questions = questionSetToAdd.get('questions') as FormArray;
    // console.log('questions  ---> ', questions);
    questions.push(this.createQuestion());
    // console.log('questions (after ADD)  ---> ', questions);
  }

  // -------------------------Remove Question Field-------------------------
  removeQuestion(setIndex: number, questionIndex: number) {
    // console.log('Remove Question Clicked');
    this.modalMessage = 'Are you sure to remove this question?';
    this.modalConfirmMessage = 'Yes, Remove';
    this.modalButtonMessage = 'Cancel';
    this.removeIndex = [setIndex, questionIndex];
  }

  // -------------------------Confirm Remove Question Field-------------------------
  confirmRemove() {
    const questionsForRemove = this.questionSets
      .at(this.removeIndex[0])
      .get('questions') as FormArray;
    console.log('questionsForRemove  ---> ', questionsForRemove);
    questionsForRemove.removeAt(this.removeIndex[1]);
    console.log('questionsForRemove (after DELETE)  ---> ', questionsForRemove);
  }
  // --------------------------------------------------End of Fieldsets Action--------------------------------------------------

  // --------------------------------------------------End of Form Submission--------------------------------------------------
  onSubmit() {
    // -------------------------Form Values-------------------------
    // console.log('Form  ---> ', this.questionsForm);
    // console.log('Form Values  ---> ', this.questionsForm.value);

    this.questionsForm.markAllAsTouched();
    // -------------------------Rating Range Validation-------------------------
    if (this.questionsForm.value.ratingRange === '') {
      // console.log('Rating Range not selected');
      const ratingArea: HTMLDivElement = document.getElementById(
        'pageTitle'
      ) as HTMLDivElement;
      // console.log('ratingArea  ---> ', ratingArea);
      ratingArea?.scrollIntoView({ behavior: 'smooth' });
    }
    // -------------------------Valid Rating Range-------------------------
    else {
      this.questionSets.controls.forEach(
        (questionSet: AbstractControl<any, any>) => {
          // console.log('questionSet  ---> ', questionSet);
          // -------------------------Question Count Validation-------------------------
          if (questionSet instanceof FormGroup) {
            const questionsArray = questionSet.get('questions') as FormArray;
            // console.log('questionsArray  ---> ', questionsArray);
            if (questionsArray.length < 2) {
              // console.log('No. of questions is less than 2');
              this.validQuestionLength = false;
              this.modalMessage = 'Enter atleast 2 questions in each section';
              this.modalButtonMessage = 'Ok';
              this.submitResultButton.click();
            }
            // -------------------------Valid Question Count-------------------------
            else {
              // console.log('No. of questions is more than 2');
              this.validQuestionLength = true;
              // -------------------------Question Field Validation-------------------------
              questionsArray.controls.forEach(
                (question: AbstractControl<any, any>) => {
                  // console.log('question  ---> ', question);
                  // -------------------------Valid Question Field-------------------------
                  if (
                    question instanceof FormGroup &&
                    question.get('questionText')?.value.trim()
                  ) {
                    // console.log('Valid Question Field');
                  }
                  // -------------------------Empty Question Field-------------------------
                  else {
                    // console.log('Empty Question Field');
                    this.emptyQuestionField = true;
                  }
                }
              );
            }
          }
        }
      );
      // -------------------------Valid Form Submission-------------------------
      if (!this.emptyQuestionField && this.validQuestionLength) {
        console.log('Valid Question Form');
        this.validForm = true;
        this.modalMessage = 'Feedback form is created successfully!';
        this.modalConfirmMessage = 'View Form Preview';
        this.uploadQuestions();
        this.submitResultButton.click();
      }
    }
  }
  // --------------------------------------------------End of Form Submission--------------------------------------------------

  // --------------------------------------------------POST Question Form--------------------------------------------------
  uploadQuestions() {
    const formData = this.questionsForm.value;
    console.log('FormData  ---> ', formData);
    if (this.editFeedback) {
      this.feedbackQuestionApi
        .editFeedbackQuestions(formData, this.requiredQuestionForm.id)
        .subscribe(
          (response) => {
            console.log('PUT Success  ---> ', response);
          },
          (error) => {
            // console.log('PUT Fail  ---> ', error);
          }
        );
    } else {
      this.feedbackQuestionApi.postFeedbackQuestions(formData).subscribe(
        (response: any) => {
          // console.log('POST Success  ---> ', response);
        },
        (error: any) => {
          // console.log('POST Fail  ---> ', error);
        }
      );
    }

    // -------------------------Navigation After POST-------------------------
    // console.log('Form Uploaded in JSON Server');
    this.questionsForm.reset();
  }
  // --------------------------------------------------End of POST Question Form--------------------------------------------------
  // --------------------------------------------------Feedback Question Form--------------------------------------------------
}
