import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  CourseCardDataService,
  UpcomingCourse,
} from '../../../Services/course-card-data.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-instructor-upcoming-course',
  templateUrl: './instructor-upcoming-course.component.html',
})
export class InstructorUpcomingCourseComponent
  implements OnInit, AfterViewInit
{
  // -------------------------Retrieve Required Data-------------------------
  requiredCourse: UpcomingCourse;
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Info Area Rings-------------------------

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

      // -------------------------Required Course-------------------------
      this.requiredCourse = this.courseCardData.getUpcomingCourses()[id - 1];
      console.log('Required Course  ---> ', this.requiredCourse);

      // -------------------------Info Area Rings Data-------------------------
      this.ringsData = [
        {
          value: this.requiredCourse.applicantCount,
          title: 'Applicants',
          href: '',
        },
        {
          value: this.requiredCourse.participantCount,
          title: 'Participants',
          href: '',
        },
      ];
      // -------------------------End of Info Area Rings Data-------------------------
    });
    // --------------------------------------------------Required Data Retrival--------------------------------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
