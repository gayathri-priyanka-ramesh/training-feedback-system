import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  AdminDataService,
  ParticipantData,
} from '../../../Services/admin-data.service';
import { ActivatedRoute } from '@angular/router';
import {
  CourseCardDataService,
  EnrolledCourse,
  UpcomingCourse,
} from '../../../Services/course-card-data.service';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-admin-participant',
  templateUrl: './admin-participant.component.html',
})
export class AdminParticipantComponent implements OnInit, AfterViewInit {
  // -------------------------Retrieve Required Data-------------------------
  requiredParticipant: ParticipantData;
  enrolledCourses: EnrolledCourse[];
  applicationCourses: UpcomingCourse[];
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Info Area Rings-------------------------

  // -------------------------Component Info-------------------------
  isAdminParticipantEnrolled: boolean = true;
  isAdminParticipantApplication: boolean = true;
  // -------------------------End of Component Info-------------------------

  constructor(
    private routeParameterRetrieval: ActivatedRoute,
    private adminData: AdminDataService,
    private courseCardData: CourseCardDataService,
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
      const id = value.get('id');
      // console.log(
      //   'Get the Router Parameter Value (id to be retrieved) --->   ',
      //   id
      // );

      // -------------------------Required Participant-------------------------
      this.requiredParticipant = this.adminData.getParticipantData()[id - 1];
      // console.log('Required Participant  ---> ', this.requiredParticipant);
      // console.log(
      //   'Enrolled Courses  ---> ',
      //   this.requiredParticipant.enrolledCourses
      // );
      // console.log(
      //   'Applied Courses  ---> ',
      //   this.requiredParticipant.appliedCourses
      // );

      // -------------------------Enrolled Course-------------------------
      this.enrolledCourses = this.courseCardData
        .getEnrolledCourses()
        .slice(0, this.requiredParticipant.enrolledCourses);
      // console.log('Enrolled Courses Array  ---> ', this.enrolledCourses);

      // -------------------------Applications-------------------------
      this.applicationCourses = this.courseCardData
        .getUpcomingCourses()
        .slice(0, this.requiredParticipant.appliedCourses);
      // console.log('Applied Courses Array  ---> ', this.applicationCourses);
    });

    // -------------------------Info Area Ring Data-------------------------
    this.ringsData = [
      {
        value: this.requiredParticipant.enrolledCourses,
        title: 'Courses Enrolled',
        href: 'enrolled-courses',
      },
      {
        value: this.requiredParticipant.appliedCourses,
        title: 'Courses Applied',
        href: 'applications',
      },
    ];
    // -------------------------End of Info Area Ring Data-------------------------
    // --------------------------------------------------End of Required Data Retrival--------------------------------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
