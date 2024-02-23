import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AdminDataService,
  ParticipantData,
  CourseData,
} from '../../../Services/admin-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-admin-participant-course-application',
  templateUrl: './admin-participant-course-application.component.html',
})
export class AdminParticipantCourseApplicationComponent implements OnInit {
  // -------------------------Retrieve Required Data-------------------------
  requiredCourse: CourseData;
  requiredApplicant: ParticipantData;
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Component Info-------------------------
  applicantForm!: FormGroup;
  statusValidation: boolean = false;
  commentValidation: boolean = false;
  // -------------------------End of Component Info-------------------------

  // -------------------------Modal Variables-------------------------
  modalMessage: string =
    'Application status has been successfully updated! Participant will be notified!';
  modalButtonMessage: string = 'View Other Applications';
  route: string;
  fragment: string = 'applications';
  // -------------------------End of Modal Variables-------------------------

  constructor(
    private routeParameterRetrieval: ActivatedRoute,
    private adminData: AdminDataService,
    private formBuilder: FormBuilder,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {
    // --------------------------------------------------Required Data Retrival--------------------------------------------------
    this.routeParameterRetrieval.paramMap.subscribe((value: any) => {
      console.log(
        "Value passed inside the 'subscribe()' method (paramMap) ---> ",
        value
      );
      console.log(
        "Router Parameter Key 'id' and 'courseName' of the 'routerPath/:parameterName1/:parameterName2' given in 'app-routing.modules.ts')  ---> ",
        value.keys
      );
      const pid = value.get('pid');
      console.log(
        'Get the Router Parameter Value (pid to be retrieved) --->   ',
        pid
      );
      const participantName = value.get('participantName');
      console.log(
        'Get the Router Parameter Value (participantName to be retrieved) --->   ',
        participantName
      );
      const id = value.get('id');
      console.log(
        'Get the Router Parameter Value (id to be retrieved) --->   ',
        id
      );

      // -------------------------Required Applicant-------------------------
      this.requiredApplicant = this.adminData.getParticipantData()[pid - 1];
      console.log('Required Applicant  ---> ', this.requiredApplicant);

      // -------------------------Required Course-------------------------
      this.requiredCourse = this.adminData.getCourseData().slice(7)[id - 1];
      console.log('Required Course  ---> ', this.requiredCourse);

      this.route = '/admin/home/participant/' + pid + '/' + participantName;
    });
    // --------------------------------------------------End of Required Data Retrival--------------------------------------------------

    // --------------------------------------------------Applicant Form--------------------------------------------------
    // -------------------------Form Initialization-------------------------
    this.applicantForm = this.formBuilder.group({
      status: [''],
      comment: ['', Validators.required],
    });

    // -------------------------Onchange Validation-------------------------
    this.applicantForm.valueChanges.subscribe(() => {
      this.statusValidation = false;
      this.commentValidation = false;
    });
  }

  // -------------------------Getting Form Fields-------------------------
  get formFields() {
    return this.applicantForm.controls;
  }

  // -------------------------Form Submission-------------------------
  formApproval() {
    console.log('Approval Form  ---> ', this.applicantForm);
    console.log('Approval Values  ---> ', this.applicantForm.value);
    const approvalStatus = this.applicantForm.value.status;
    const approvalComment = this.applicantForm.value.comment;
    console.log('Applicant Status  ---> ', approvalStatus);
    console.log('Applicant Comment  ---> ', approvalComment);

    if (approvalStatus !== 'Approved' && approvalStatus !== 'Disapproved') {
      this.statusValidation = true;
    } else if (approvalComment === '') {
      this.commentValidation = true;
    } else {
      console.log('Submit Success');
      let closeRef: HTMLAnchorElement = document.getElementById(
        'submit-result'
      ) as HTMLAnchorElement;
      closeRef?.click();
    }
  }
  // -------------------------End of Form Submission-------------------------
  // --------------------------------------------------End of Applicant Form--------------------------------------------------

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
