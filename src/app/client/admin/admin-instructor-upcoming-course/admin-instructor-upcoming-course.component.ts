import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  UpcomingCourse,
  CourseCardDataService,
} from '../../../Services/course-card-data.service';
import {
  AdminDataService,
  ApplicantData,
  InstructorData,
} from '../../../Services/admin-data.service';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-admin-instructor-upcoming-course',
  templateUrl: './admin-instructor-upcoming-course.component.html',
})
export class AdminInstructorUpcomingCourseComponent
  implements OnInit, AfterViewInit
{
  // -------------------------Retrieve Required Data-------------------------
  requiredInstructor: InstructorData;
  requiredCourse: UpcomingCourse;
  applicantList: ApplicantData[];
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Info Area Rings-------------------------

  // -------------------------Data Table Variables-------------------------
  dtOptions: DataTables.Settings = {};
  // -------------------------End of Data Table Variables-------------------------

  constructor(
    private routeParameterRetrieval: ActivatedRoute,
    private courseCardData: CourseCardDataService,
    private adminData: AdminDataService,
    private navigation: NavigationService
  ) {}
  ngOnInit(): void {
    // --------------------------------------------------Required Data Retrival--------------------------------------------------
    this.routeParameterRetrieval.paramMap.subscribe((value: any) => {
      // console.log(
      //   "Value passed inside the 'subscribe()' method (paramMap) ---> ",
      //   value
      // );
      // console.log(
      //   "Router Parameter Key 'id' and 'courseName' of the 'routerPath/:parameterName1/:parameterName2' given in 'app-routing.modules.ts')  ---> ",
      //   value.keys
      // );
      const iid = value.get('iid');
      // console.log(
      //   'Get the Router Parameter Value (iid to be retrieved) --->   ',
      //   iid
      // );
      const id = value.get('id');
      // console.log(
      //   'Get the Router Parameter Value (id to be retrieved) --->   ',
      //   id
      // );

      // -------------------------Required Instructor-------------------------
      this.requiredInstructor = this.adminData.getInstructorData()[iid - 1];
      // console.log('Required Instructor  ---> ', this.requiredInstructor);

      // -------------------------Required Course-------------------------
      this.requiredCourse = this.courseCardData.getUpcomingCourses()[id - 1];
      // console.log('Required Course  ---> ', this.requiredCourse);
    });
    // -------------------------Applicant List-------------------------
    this.applicantList = this.adminData
      .getApplicantData()
      .slice(0, this.requiredCourse.applicantCount);
    // console.log('Applicant List  ---> ', this.applicantList);

    // -------------------------Info Area Ring Data-------------------------
    this.ringsData = [
      {
        value: this.requiredCourse.participantCount,
        title: 'Enrollments',
        href: '',
      },
      {
        value: this.requiredCourse.applicantCount,
        title: 'Applicants',
        href: 'course-applications',
      },
    ];
    // -------------------------End of Info Area Ring Data-------------------------
    // --------------------------------------------------End of Required Data Retrival--------------------------------------------------

    // -------------------------Data Table Options-------------------------
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'Bfrtip',
    };
    // -------------------------End of Data Table Options-------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
