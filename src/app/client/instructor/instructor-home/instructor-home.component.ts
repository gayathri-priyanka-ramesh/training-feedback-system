import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  CourseCardDataService,
  OngoingCourse,
  UpcomingCourse,
} from '../../../Services/course-card-data.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-instructor-home',
  templateUrl: './instructor-home.component.html',
})
export class InstructorHomeComponent implements OnInit, AfterViewInit {
  // -------------------------Login Session-------------------------
  userName: string;
  // -------------------------End of Login Session-------------------------

  // -------------------------Info Area Rings-------------------------
  ringsData: { value: number; title: string; href: string }[];
  // -------------------------End of Info Area Rings-------------------------

  // -------------------------Retrieve Required Data-------------------------
  ongoingCourses: OngoingCourse[];
  upcomingCourses: UpcomingCourse[];
  // -------------------------End of Retrieve Required Data-------------------------

  constructor(
    private courseCardData: CourseCardDataService,
    private auth: AuthService,
    private router: Router,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {
    // -------------------------Login Session-------------------------
    this.userName = localStorage.getItem('userName') as string;
    // console.log('Username  ---> ', this.userName);
    // -------------------------End of Login Session-------------------------

    // -------------------------Retrieve Required Data-------------------------
    this.ongoingCourses = this.courseCardData.getOngoingCourses();
    // console.log('Ongoing Courses Array  ---> ', this.ongoingCourses);
    this.upcomingCourses = this.courseCardData.getUpcomingCourses();
    // console.log('Upcoming Courses Array  ---> ', this.upcomingCourses);
    // -------------------------End of Retrieve Required Data-------------------------

    // -------------------------Info Area Rings Data-------------------------
    this.ringsData = [
      {
        value: this.ongoingCourses.length,
        title: 'Ongoing Courses',
        href: 'ongoing-courses',
      },
      {
        value: this.upcomingCourses.length,
        title: 'Upcoming Courses',
        href: 'upcoming-courses',
      },
      { value: 25, title: 'Feedback Received', href: '' },
    ];
    // -------------------------End of Info Area Rings Data-------------------------
  }

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
