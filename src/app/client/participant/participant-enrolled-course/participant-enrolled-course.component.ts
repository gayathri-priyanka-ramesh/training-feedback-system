import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CourseCardDataService,
  EnrolledCourse,
} from '../../../Services/course-card-data.service';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-participant-enrolled-course',
  templateUrl: './participant-enrolled-course.component.html',
})
export class ParticipantEnrolledCourseComponent
  implements OnInit, AfterViewInit
{
  // -------------------------Retrieve Required Data-------------------------
  requiredCourse: EnrolledCourse;
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[] = [
    { value: 6, title: 'Feedback Submitted', href: 'feedback' },
    { value: 4, title: 'Feedback Responded', href: 'feedback-responses' },
  ];
  // -------------------------End of Info Area Rings-------------------------

  // -------------------------Module Numbers-------------------------
  moduleNumber: string[] = ['Module 9', 'Module 8', 'Module 7'];
  // -------------------------End of Module Numbers-------------------------

  // -------------------------Component Info-------------------------
  responseDataParticipantView: boolean = true;
  // -------------------------End of Component Info-------------------------

  constructor(
    private routeParameterRetrieval: ActivatedRoute,
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

      // -------------------------Required Course-------------------------
      this.requiredCourse = this.courseCardData.getEnrolledCourses()[id - 1];
      // console.log('Required Course  ---> ', this.requiredCourse);
    });
    // --------------------------------------------------Required Data Retrival--------------------------------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
