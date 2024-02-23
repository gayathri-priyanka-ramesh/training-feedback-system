import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CourseCardDataService,
  OngoingCourse,
} from '../../../Services/course-card-data.service';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-instructor-feedback',
  templateUrl: './instructor-feedback.component.html',
})
export class InstructorFeedbackComponent implements OnInit, AfterViewInit {
  // -------------------------Retrieve Required Data-------------------------
  requiredCourse: OngoingCourse;
  moduleInfo: string;
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Component Info-------------------------
  responseDataInstructorView: boolean = true;
  confirmRoute: string;
  // -------------------------End of Component Info-------------------------

  constructor(
    private routeParameterRetrieval: ActivatedRoute,
    private courseCardData: CourseCardDataService,
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
      const id = value.get('id');
      console.log(
        'Get the Router Parameter Value (id to be retrieved) --->   ',
        id
      );
      const module = value.get('module');
      console.log(
        'Get the Router Parameter Value (module to be retrieved) --->   ',
        module
      );

      // -------------------------Required Course-------------------------
      this.requiredCourse = this.courseCardData.getOngoingCourses()[id - 1];
      console.log('Required Course  ---> ', this.requiredCourse);
      this.moduleInfo = module;
      console.log('moduleInfo  ---> ', this.moduleInfo);
      this.confirmRoute =
        this.requiredCourse.route +
        '/feedbackView/report/' +
        this.requiredCourse.id +
        '/' +
        this.requiredCourse.courseName;
    });
    // --------------------------------------------------Required Data Retrival--------------------------------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
