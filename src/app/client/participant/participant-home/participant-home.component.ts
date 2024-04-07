import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  CourseCardDataService,
  EnrolledCourse,
  AppliedTrendingCourse,
} from '../../../Services/course-card-data.service';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-participant-home',
  templateUrl: './participant-home.component.html',
})
export class ParticipantHomeComponent implements OnInit, AfterViewInit {
  // -------------------------Login Session-------------------------
  userName: string;

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Info Area Rings-------------------------

  // -------------------------Retrieve Required Data-------------------------
  enrolledCourses: EnrolledCourse[];
  appliedCourses: AppliedTrendingCourse[];
  trendingCourses: AppliedTrendingCourse[];
  appliedCoursesStored: string[];
  // -------------------------End of Retrieve Required Data-------------------------

  constructor(
    private courseCardData: CourseCardDataService,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {
    // -------------------------Login Session-------------------------
    if (typeof localStorage !== 'undefined') {
      this.userName = localStorage.getItem('participant-userName') as string;
      // console.log('Username  ---> ', this.userName);
    } else {
      // console.log('Local Storage is not available');
    }
    // -------------------------End of Login Session-------------------------

    // -------------------------Retrieve Applied Courses from Local Storage-------------------------
    this.appliedCoursesStored = this.courseCardData.getAppliedCoursesStored();
    // -------------------------End of Retrieve Applied Courses from Local Storage-------------------------

    // -------------------------Retrieve Required Data-------------------------
    this.enrolledCourses = this.courseCardData.getEnrolledCourses();
    // console.log('Enrolled Courses Array  ---> ', this.enrolledCourses);

    this.appliedCourses = this.courseCardData.getAppliedCourses();
    this.appliedCoursesStored.forEach((courseApplied: string) => {
      const appliedCourseInfo: AppliedTrendingCourse = this.courseCardData
        .getTrendingCourses()
        .find(
          (course: AppliedTrendingCourse) => course.courseName === courseApplied
        ) as AppliedTrendingCourse;
      appliedCourseInfo.route = '/participant/appliedCourse';
      this.appliedCourses.unshift(appliedCourseInfo as AppliedTrendingCourse);
    });
    // console.log('Applied Courses Array  ---> ', this.appliedCourses);

    this.trendingCourses = this.courseCardData
      .getTrendingCourses()
      .filter(
        (course: any) => !this.appliedCoursesStored.includes(course.courseName)
      );
    // console.log('Trending Courses Array  ---> ', this.trendingCourses);
    // -------------------------End of Retrieve Required Data-------------------------

    // -------------------------Info Area Rings Data-------------------------
    this.ringsData = [
      {
        value: this.enrolledCourses.length,
        title: 'Enrolled Courses',
        href: 'enrolled-courses',
      },
      {
        value: this.appliedCourses.length,
        title: 'Applied Courses',
        href: 'applied-courses',
      },
      { value: 6, title: 'Feedback Submitted', href: '' },
    ];
    // -------------------------End of Info Area Rings Data-------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
