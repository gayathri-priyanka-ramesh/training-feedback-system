import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicantApprovalService } from '../../Services/applicant-approval.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-applicant-table',
  templateUrl: './applicant-table.component.html',
})
export class ApplicantTableComponent implements OnInit, OnDestroy {
  // -------------------------Input Required Variable-------------------------
  @Input() applicantCount: number;
  // -------------------------Input Required Variable-------------------------

  // -------------------------Datatable Variables-------------------------
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  // -------------------------End of Datatable Variables-------------------------

  // -------------------------Approval Table Info-------------------------
  applicantForm!: FormGroup;
  applicantObj: ApplicantApproval = new ApplicantApproval();
  applicantDataStore!: ApplicantApproval[];
  applicantId: number = 0;
  statusValidation: boolean = false;
  commentValidation: boolean = false;
  // -------------------------Approval Table Info-------------------------

  constructor(
    private formBuilder: FormBuilder,
    private applicantApi: ApplicantApprovalService
  ) {}

  ngOnInit(): void {
    // -------------------------Datatable Options-------------------------
    this.dtOptions = {
      destroy: true,
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'Bfrtip',
    };
    // -------------------------End of Datatable Options-------------------------

    // --------------------------------------------------Approval Form--------------------------------------------------
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

    // -------------------------Retrieve Approval Details-------------------------
    this.getApprovalStatus();
  }

  // -------------------------Getting Form Fields-------------------------
  get formFields() {
    return this.applicantForm.controls;
  }

  // --------------------------------------------------GET Approval Details--------------------------------------------------
  getApprovalStatus() {
    this.applicantApi.getApprovalData().subscribe(
      (res) => {
        // -------------------------Form Values-------------------------
        // console.log('Applicant Count  ---> ', this.applicantCount);
        this.applicantDataStore = res.slice(0, this.applicantCount);
        // console.log('GET Success  ---> ', this.applicantDataStore);
        // -------------------------Data Table Trigger-------------------------
        this.dtTrigger.next(null);
      },
      (error) => {
        // console.log('GET Fail  ---> ', error);
        alert('GET not Success');
      }
    );
  }
  // --------------------------------------------------End of GET Approval Details--------------------------------------------------

  // --------------------------------------------------EDIT Approval Details--------------------------------------------------
  editApprovalStatus(applicant: any) {
    this.applicantObj.id = applicant.id;
    this.applicantObj.applicantName = applicant.applicantName;
    this.applicantObj.appliedDate = applicant.appliedDate;
    this.applicantObj.enrolledCourses = applicant.enrolledCourses;
    this.applicantForm.controls['status'].setValue(applicant.status);
    this.applicantForm.controls['comment'].setValue(applicant.comment);
  }
  // --------------------------------------------------End of EDIT Approval Details--------------------------------------------------

  // --------------------------------------------------PUT Approval Details--------------------------------------------------
  updateApprovalStatus() {
    // -------------------------Form Values-------------------------
    // console.log('Approval Form  ---> ', this.applicantForm);
    // console.log('Approval Values  ---> ', this.applicantForm.value);
    this.applicantObj.status = this.applicantForm.value.status;
    this.applicantObj.comment = this.applicantForm.value.comment;
    // console.log('Applicant Object  ---> ', this.applicantObj);
    // console.log('Applicant Status  ---> ', this.applicantObj.status);
    // console.log('Applicant Comment  ---> ', this.applicantObj.comment);

    // -------------------------Validate Approval Choice-------------------------
    if (
      this.applicantObj.status !== 'Approved' &&
      this.applicantObj.status !== 'Disapproved'
    ) {
      this.statusValidation = true;
    }

    // -------------------------Validate Approval Reason-------------------------
    else if (this.applicantObj.comment === '') {
      this.commentValidation = true;
    }

    // -------------------------PUT Valid Approval Data-------------------------
    else {
      this.applicantApi
        .editApproval(this.applicantObj, Number(this.applicantObj.id))
        .subscribe(
          (res) => {
            // console.log('PUT Success  ---> ', res);
            let closeButtonRef: HTMLButtonElement = document.getElementById(
              'close'
            ) as HTMLButtonElement;
            closeButtonRef?.click();
            this.applicantForm.reset();
            this.getApprovalStatus();
          },
          (error) => {
            // console.log('PUT Fail  ---> ', error);
            alert('PUT not successful');
          }
        );
    }
  }
  // --------------------------------------------------End of PUT Approval Details--------------------------------------------------
  // --------------------------------------------------Approval Form--------------------------------------------------

  ngOnDestroy(): void {
    // -------------------------Data Table Trigger-------------------------
    this.dtTrigger.unsubscribe();
  }
}

// -------------------------Applicant Table Properties-------------------------
class ApplicantApproval {
  id: string = '0';
  applicantName: string;
  appliedDate: string;
  enrolledCourses: number;
  status: string = '';
  comment: string = '';
}
// -------------------------End of Applicant Table Properties-------------------------
