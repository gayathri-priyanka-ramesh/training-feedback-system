import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  CourseCardDataService,
  AppliedTrendingCourse,
} from '../../../Services/course-card-data.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-participant-trending-course',
  templateUrl: './participant-trending-course.component.html',
})
export class ParticipantTrendingCourseComponent
  implements OnInit, AfterViewInit
{
  // -------------------------Retrieve Required Data-------------------------
  requiredCourse: AppliedTrendingCourse;
  starArray: number[];
  trendingCourses: AppliedTrendingCourse[];
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Info Area Rings-------------------------

  // -------------------------Modal Variables-------------------------
  modalMessage: string =
    'Your application has been successfully submitted! Please wait for the approval!';
  modalButtonMessage: string = 'Back to Home';
  route: string = '/participant';
  fragment: string = 'pageTitle';
  // -------------------------End of Modal Variables-------------------------

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
      this.requiredCourse = this.courseCardData.getTrendingCourses()[id - 1];
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

      // -------------------------Trending Courses-------------------------
      this.trendingCourses = this.courseCardData
        .getTrendingCourses()
        .filter((course: any) => course.id !== this.requiredCourse.id);
      // console.log('Trending Courses Array  ---> ', this.trendingCourses);
    });
    // --------------------------------------------------End of Required Data Retrival--------------------------------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
