import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  CourseCardDataService,
  AppliedTrendingCourse,
} from '../../../Services/course-card-data.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-participant-applied-course',
  templateUrl: './participant-applied-course.component.html',
})
export class ParticipantAppliedCourseComponent
  implements OnInit, AfterViewInit
{
  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Info Area Rings-------------------------

  // -------------------------Retrieve Required Data-------------------------
  requiredCourse: AppliedTrendingCourse;
  starArray: number[];
  trendingCourses: AppliedTrendingCourse[];
  appliedCoursesStored: string[];
  // -------------------------End of Retrieve Required Data-------------------------

  constructor(
    private routeParameterRetrieval: ActivatedRoute,
    private courseCardData: CourseCardDataService,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {
    // --------------------------------------------------Retrieving Required Variable--------------------------------------------------
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
      const courseName = value.get('courseName');
      // console.log(
      //   'Get the Router Parameter Value (courseName to be retrieved) --->   ',
      //   courseName
      // );

      // -------------------------Retrieve Applied Courses from Local Storage-------------------------
      this.appliedCoursesStored = this.courseCardData.getAppliedCoursesStored();
      // -------------------------End of Retrieve Applied Courses from Local Storage-------------------------

      // -------------------------Required Course-------------------------
      if (this.appliedCoursesStored.includes(courseName)) {
        this.requiredCourse = this.courseCardData.getTrendingCourses()[id - 1];
      } else {
        this.requiredCourse = this.courseCardData.getAppliedCourses()[id - 1];
      }
      // console.log('Required Course  ---> ', this.requiredCourse);
      this.starArray = this.courseCardData.getStars(this.requiredCourse.rating);

      // -------------------------Info Area Rings Data-------------------------
      this.ringsData = [
        {
          value: this.requiredCourse.participantCount,
          title: 'Participants Applied',
          href: '',
        },
        {
          value: this.requiredCourse.applicantCount,
          title: 'Participants Enrolled',
          href: '',
        },
      ];
      // -------------------------End of Info Area Rings Data-------------------------
    });

    // -------------------------Trending Courses-------------------------
    this.trendingCourses = this.courseCardData
      .getTrendingCourses()
      .filter(
        (course: any) => !this.appliedCoursesStored.includes(course.courseName)
      );
    // console.log('Trending Courses Array  ---> ', this.trendingCourses);
    // --------------------------------------------------End of Required Data Retrival--------------------------------------------------
  }

  ngAfterViewInit(): void {
    // --------------------------------------------------Fragment Routing--------------------------------------------------
    this.navigation.fragmentRouting();
  }
}
