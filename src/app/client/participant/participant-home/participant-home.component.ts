import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  CourseCardDataService,
  EnrolledCourse,
  AppliedTrendingCourse,
} from '../../../Services/course-card-data.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
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
  // -------------------------End of Retrieve Required Data-------------------------

  constructor(
    private courseCardData: CourseCardDataService,
    private auth: AuthService,
    private router: Router,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {
    // -------------------------Login Session-------------------------
    this.userName = sessionStorage.getItem('userName') as string;
    // console.log('Username  ---> ', this.userName);
    // -------------------------End of Login Session-------------------------

    // -------------------------Retrieve Required Data-------------------------
    this.enrolledCourses = this.courseCardData.getEnrolledCourses();
    // console.log('Enrolled Courses Array  ---> ', this.enrolledCourses);
    this.appliedCourses = this.courseCardData.getAppliedCourses();
    // console.log('Applied Courses Array  ---> ', this.appliedCourses);
    this.trendingCourses = this.courseCardData.getTrendingCourses();
    // console.log('Trending Courses Array  ---> ', this.trendingCourses);
    // -------------------------End of Retrieve Required Data-------------------------

    // -------------------------Info Area Rings Data-------------------------
    this.ringsData = [
      {
        value: this.enrolledCourses.length,
        title: 'Enrolled Courses',
        href: 'enrolled-courses',
      },
      { value: 4, title: 'Applied Courses', href: 'applied-courses' },
      { value: 6, title: 'Feedback Submitted', href: '' },
    ];
    // -------------------------End of Info Area Rings Data-------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
