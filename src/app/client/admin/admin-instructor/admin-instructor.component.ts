import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  AdminDataService,
  InstructorData,
} from '../../../Services/admin-data.service';
import { ActivatedRoute } from '@angular/router';
import {
  UpcomingCourse,
  CourseCardDataService,
  OngoingCourse,
} from '../../../Services/course-card-data.service';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-admin-instructor',
  templateUrl: './admin-instructor.component.html',
})
export class AdminInstructorComponent implements OnInit, AfterViewInit {
  // -------------------------Retrieve Required Data-------------------------
  requiredInstructor: InstructorData;
  ongoingCourses: OngoingCourse[];
  upcomingCourses: UpcomingCourse[];
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Info Area Rings-------------------------

  // -------------------------Component Info-------------------------
  isAdminInstructorOngoing: boolean = true;
  isAdminInstructorUpcoming: boolean = true;
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

      // -------------------------Required Instructor-------------------------
      this.requiredInstructor = this.adminData.getInstructorData()[id - 1];
      // console.log('Required Instructor  ---> ', this.requiredInstructor);
      // console.log(
      //   'Ongoing Courses  ---> ',
      //   this.requiredInstructor.ongoingCourses
      // );
      // console.log(
      //   'Upcoming Courses  ---> ',
      //   this.requiredInstructor.upcomingCourses
      // );

      // -------------------------Ongoing Course-------------------------
      this.ongoingCourses = this.courseCardData
        .getOngoingCourses()
        .slice(0, this.requiredInstructor.ongoingCourses);
      // console.log('Enrolled Courses Array  ---> ', this.ongoingCourses);

      // -------------------------Upcoming Course-------------------------
      this.upcomingCourses = this.courseCardData
        .getUpcomingCourses()
        .slice(0, this.requiredInstructor.upcomingCourses);
      // console.log('Applied Courses Array  ---> ', this.upcomingCourses);
    });

    // -------------------------Info Area Rings-------------------------
    this.ringsData = [
      {
        value: this.requiredInstructor.ongoingCourses,
        title: 'Ongoing Courses',
        href: 'ongoing-courses',
      },
      {
        value: this.requiredInstructor.upcomingCourses,
        title: 'Upcoming Courses',
        href: 'upcoming-courses',
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
