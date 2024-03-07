import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CourseCardDataService,
  EnrolledCourse,
} from '../../../Services/course-card-data.service';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-participant-feedback-submit',
  templateUrl: './participant-feedback-submit.component.html',
})
export class ParticipantFeedbackSubmitComponent
  implements OnInit, AfterViewInit
{
  // -------------------------Retrieve Required Data-------------------------
  requiredCourse: EnrolledCourse;
  moduleInfo: string;
  route: string;
  // -------------------------End of Retrieve Required Data-------------------------

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
      const module = value.get('module');
      // console.log(
      //   'Get the Router Parameter Value (module to be retrieved) --->   ',
      //   module
      // );

      // -------------------------Required Course-------------------------
      this.requiredCourse = this.courseCardData.getEnrolledCourses()[id - 1];
      // console.log('Required Course  ---> ', this.requiredCourse);
      this.moduleInfo = module;
      // console.log('moduleInfo  ---> ', this.moduleInfo);
      this.route =
        '/participant/enrolledCourse/' +
        this.requiredCourse.id +
        '/' +
        this.requiredCourse.courseName;
    });
    // --------------------------------------------------End of Required Data Retrival--------------------------------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
