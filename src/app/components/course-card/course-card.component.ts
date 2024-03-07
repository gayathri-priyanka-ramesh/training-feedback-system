import { Component, OnInit, Input } from '@angular/core';
import {
  CourseCardDataService,
  EnrolledCourse,
  AppliedTrendingCourse,
  OngoingCourse,
  UpcomingCourse,
} from '../../Services/course-card-data.service';
import {
  InstructorData,
  ParticipantData,
} from '../../Services/admin-data.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
})
export class CourseCardComponent implements OnInit {
  // -------------------------Input Required Variables-------------------------
  @Input() courseData:
    | EnrolledCourse
    | AppliedTrendingCourse
    | OngoingCourse
    | UpcomingCourse;
  @Input() isAdminParticipantEnrolled: boolean;
  @Input() isAdminParticipantApplication: boolean;
  @Input() isAdminInstructorOngoing: boolean;
  @Input() isAdminInstructorUpcoming: boolean;
  @Input() requiredParticipant: ParticipantData;
  @Input() requiredInstructor: InstructorData;
  @Input() route: string;
  // -------------------------End of Input Required Variables-------------------------

  // -------------------------End of Retrieve Required Data-------------------------
  ongoingCourseData: OngoingCourse;
  upcomingCourseData: UpcomingCourse;
  appliedTrendingCourseData: AppliedTrendingCourse;
  enrolledCourseData: EnrolledCourse;
  starArray: number[];
  // -------------------------End of Retrieve Required Data-------------------------

  // -------------------------Component Info-------------------------
  isOngoingCourse: boolean = false;
  isUpcomingCourse: boolean = false;
  isAppliedTrendingCourse: boolean = false;
  isEnrolledCourse: boolean = false;
  // -------------------------End of Component Info-------------------------

  constructor(private courseCardData: CourseCardDataService) {}

  ngOnInit(): void {
    // --------------------------------------------------Set Course Type Based on Properties--------------------------------------------------
    // -------------------------Upcoming Course-------------------------
    if ('status' in this.courseData) {
      this.isUpcomingCourse = true;
      this.upcomingCourseData = this.courseData as UpcomingCourse;
      // console.log('Upcoming Course  ---> ', this.upcomingCourseData);
    }
    // -------------------------Ongoing Course-------------------------
    else if ('feedbackReceived' in this.courseData) {
      this.isOngoingCourse = true;
      this.ongoingCourseData = this.courseData as OngoingCourse;
      // console.log('Ongoing Course  ---> ', this.ongoingCourseData);
    }
    // -------------------------Applied / Trending Course-------------------------
    else if ('rating' in this.courseData && 'startDate' in this.courseData) {
      this.isAppliedTrendingCourse = true;
      this.appliedTrendingCourseData = this.courseData as AppliedTrendingCourse;
      // console.log(
      //   'AppliedTrending Course  ---> ',
      //   this.appliedTrendingCourseData
      // );
      this.starArray = this.courseCardData.getStars(
        this.appliedTrendingCourseData.rating
      );
    }
    // -------------------------Enrolled Course-------------------------
    else {
      this.isEnrolledCourse = true;
      this.enrolledCourseData = this.courseData as EnrolledCourse;
      // console.log('Enrolled Course  ---> ', this.enrolledCourseData);
    }
    // --------------------------------------------------Set Course Type Based on Properties--------------------------------------------------
  }
}
