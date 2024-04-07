// --------------------------------------------------Default Imports--------------------------------------------------
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// --------------------------------------------------End of Default Imports--------------------------------------------------

// --------------------------------------------------End of Router Guard--------------------------------------------------
import { AuthGuardService } from './Services/auth-guard.service';
// --------------------------------------------------End of Router Guard--------------------------------------------------

// --------------------------------------------------User Components--------------------------------------------------
import { LoginComponent } from './client/login/login.component';

// -------------------------Participant-------------------------
import { ParticipantComponent } from './client/participant/participant.component';
import { ParticipantHomeComponent } from './client/participant/participant-home/participant-home.component';
import { ParticipantEnrolledCourseComponent } from './client/participant/participant-enrolled-course/participant-enrolled-course.component';
import { ParticipantCourseComponent } from './client/participant/participant-course/participant-course.component';
import { ParticipantFeedbackSubmitComponent } from './client/participant/participant-feedback-submit/participant-feedback-submit.component';
import { ParticipantReportComponent } from './client/participant/participant-report/participant-report.component';
import { ParticipantAppliedCourseComponent } from './client/participant/participant-applied-course/participant-applied-course.component';
import { ParticipantTrendingCourseComponent } from './client/participant/participant-trending-course/participant-trending-course.component';
// -------------------------End of Participant-------------------------

// -------------------------Instructor-------------------------
import { InstructorComponent } from './client/instructor/instructor.component';
import { InstructorHomeComponent } from './client/instructor/instructor-home/instructor-home.component';
import { InstructorOngoingCourseComponent } from './client/instructor/instructor-ongoing-course/instructor-ongoing-course.component';
import { InstructorCourseComponent } from './client/instructor/instructor-course/instructor-course.component';
import { InstructorFeedbackComponent } from './client/instructor/instructor-feedback/instructor-feedback.component';
import { InstructorReportComponent } from './client/instructor/instructor-report/instructor-report.component';
import { InstructorUpcomingCourseComponent } from './client/instructor/instructor-upcoming-course/instructor-upcoming-course.component';
// -------------------------End of Instructor-------------------------

// -------------------------Admin-------------------------
import { AdminComponent } from './client/admin/admin.component';
import { AdminLoginComponent } from './client/admin/admin-login/admin-login.component';
import { AdminHeaderComponent } from './client/admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './client/admin/admin-home/admin-home.component';
import { AdminCourseComponent } from './client/admin/admin-course/admin-course.component';
import { AdminCreateFeedbackComponent } from './client/admin/admin-create-feedback/admin-create-feedback.component';
import { AdminEditFeedbackComponent } from './client/admin/admin-edit-feedback/admin-edit-feedback.component';
import { AdminFeedbackFormPreviewComponent } from './client/admin/admin-feedback-form-preview/admin-feedback-form-preview.component';
import { AdminCourseFeedbackComponent } from './client/admin/admin-course-feedback/admin-course-feedback.component';
import { AdminReportComponent } from './client/admin/admin-report/admin-report.component';
import { AdminInstructorComponent } from './client/admin/admin-instructor/admin-instructor.component';
import { AdminInstructorOngoingCourseComponent } from './client/admin/admin-instructor-ongoing-course/admin-instructor-ongoing-course.component';
import { AdminInstructorUpcomingCourseComponent } from './client/admin/admin-instructor-upcoming-course/admin-instructor-upcoming-course.component';
import { AdminParticipantComponent } from './client/admin/admin-participant/admin-participant.component';
import { AdminParticipantEnrolledCourseComponent } from './client/admin/admin-participant-enrolled-course/admin-participant-enrolled-course.component';
import { AdminParticipantCourseApplicationComponent } from './client/admin/admin-participant-course-application/admin-participant-course-application.component';
// -------------------------End of Admin-------------------------
// --------------------------------------------------End of User Components--------------------------------------------------

const routes: Routes = [
  // --------------------------------------------------Landing Page--------------------------------------------------
  { path: '', component: LoginComponent },

  // --------------------------------------------------Participant Page--------------------------------------------------
  {
    path: 'participant',
    component: ParticipantComponent,
    canActivateChild: [AuthGuardService],
    children: [
      // -------------------------Participant Home-------------------------
      {
        path: '',
        component: ParticipantHomeComponent,
        data: {
          title: 'participant',
          breadcrumb: [
            {
              label: 'Home',
              url: '',
            },
          ],
        },
      },
      // -------------------------Participant Enrolled Course-------------------------
      {
        path: 'enrolledCourse/:id/:courseName',
        component: ParticipantEnrolledCourseComponent,
        data: {
          title: 'enrolledCourse',
          breadcrumb: [
            { label: 'Home', url: '/participant' },
            { label: '{{courseName}}', url: '' },
          ],
        },
      },
      // -------------------------Participant View Enrolled Course-------------------------
      {
        path: 'enrolledCourse/viewCourse/:id/:courseName',
        component: ParticipantCourseComponent,
        data: {
          title: 'viewCourse',
          breadcrumb: [
            { label: 'Home', url: '/participant' },
            {
              label: '{{courseName}}',
              url: '/participant/enrolledCourse/:id/:courseName',
            },
            { label: 'Course Content', url: '' },
          ],
        },
      },
      // -------------------------Participant Submit Enrolled Course Feedback-------------------------
      {
        path: 'enrolledCourse/feedbackSubmit/:id/:courseName/:module',
        component: ParticipantFeedbackSubmitComponent,
        data: {
          title: 'feedbackSubmit',
          breadcrumb: [
            { label: 'Home', url: '/participant' },
            {
              label: '{{courseName}}',
              url: '/participant/enrolledCourse/:id/:courseName',
            },
            { label: 'Submit Feedback', url: '' },
          ],
        },
      },
      // -------------------------Participant View Enrolled Course Feedback Report-------------------------
      {
        path: 'enrolledCourse/report/:id/:courseName',
        component: ParticipantReportComponent,
        data: {
          title: 'report',
          breadcrumb: [
            {
              label: 'Home',
              url: '/participant',
              fragment: 'enrolled-courses',
            },
            {
              label: '{{courseName}}',
              url: '/participant/enrolledCourse/:id/:courseName',
              fragment: 'pageTitle',
            },
            { label: 'Report', url: '' },
          ],
        },
      },
      // -------------------------Participant Applied Course-------------------------
      {
        path: 'appliedCourse/:id/:courseName',
        component: ParticipantAppliedCourseComponent,
        data: {
          title: 'appliedCourse',
          breadcrumb: [
            { label: 'Home', url: '/participant' },
            { label: '{{courseName}}', url: '' },
          ],
        },
      },
      // -------------------------Participant Trending Course-------------------------
      {
        path: 'trendingCourse/:id/:courseName',
        component: ParticipantTrendingCourseComponent,
        data: {
          title: 'trendingCourse',
          breadcrumb: [
            { label: 'Home', url: '/participant' },
            { label: '{{courseName}}', url: '' },
          ],
        },
      },
    ],
  },
  // --------------------------------------------------End of Participant Page--------------------------------------------------

  // --------------------------------------------------Instructor Page--------------------------------------------------
  {
    path: 'instructor',
    component: InstructorComponent,
    canActivateChild: [AuthGuardService],
    children: [
      // -------------------------Instructor Home-------------------------
      {
        path: '',
        component: InstructorHomeComponent,
        data: {
          title: 'instructor',
          breadcrumb: [
            {
              label: 'Home',
              url: '',
            },
          ],
        },
      },
      // -------------------------Instructor Ongoing Course-------------------------
      {
        path: 'ongoingCourse/:id/:courseName',
        component: InstructorOngoingCourseComponent,
        data: {
          title: 'ongoingCourse',
          breadcrumb: [
            { label: 'Home', url: '/instructor' },
            { label: '{{courseName}}', url: '' },
          ],
        },
      },
      // -------------------------Instructor View Ongoing Course-------------------------
      {
        path: 'ongoingCourse/viewCourse/:id/:courseName',
        component: InstructorCourseComponent,
        data: {
          title: 'viewCourse',
          breadcrumb: [
            { label: 'Home', url: '/instructor' },
            {
              label: '{{courseName}}',
              url: '/instructor/ongoingCourse/:id/:courseName',
            },
            { label: 'Course Content', url: '' },
          ],
        },
      },
      // -------------------------Instructor View Ongoing Course Feedback Report-------------------------
      {
        path: 'ongoingCourse/feedbackView/report/:id/:courseName',
        component: InstructorReportComponent,
        data: {
          title: 'report',
          breadcrumb: [
            { label: 'Home', url: '/instructor' },
            {
              label: '{{courseName}}',
              url: '/instructor/ongoingCourse/:id/:courseName',
            },
            {
              label: 'View Feedback',
              url: '/instructor/ongoingCourse/feedbackView/:id/:courseName/:module',
            },
            { label: 'Report', url: '' },
          ],
        },
      },
      // -------------------------Instructor View Ongoing Course Feedback-------------------------
      {
        path: 'ongoingCourse/feedbackView/:id/:courseName/:module',
        component: InstructorFeedbackComponent,
        data: {
          title: 'feedbackView',
          breadcrumb: [
            { label: 'Home', url: '/instructor' },
            {
              label: '{{courseName}}',
              url: '/instructor/ongoingCourse/:id/:courseName',
            },
            {
              label: 'View Feedback',
              url: '',
            },
          ],
        },
      },
      // -------------------------Instructor Upcoming Course-------------------------
      {
        path: 'upcomingCourse/:id/:courseName',
        component: InstructorUpcomingCourseComponent,
        data: {
          title: 'upcomingCourse',
          breadcrumb: [
            { label: 'Home', url: '/instructor' },
            { label: '{{courseName}}', url: '' },
          ],
        },
      },
    ],
  },
  // --------------------------------------------------End of Instructor Page--------------------------------------------------

  // --------------------------------------------------Admin Page--------------------------------------------------
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      // -------------------------Admin Login-------------------------
      {
        path: '',
        component: AdminLoginComponent,
      },
      // -------------------------Admin Home-------------------------
      {
        path: 'home',
        component: AdminHeaderComponent,
        canActivateChild: [AuthGuardService],
        children: [
          {
            path: '',
            component: AdminHomeComponent,
            data: {
              title: 'admin',
              breadcrumb: [
                {
                  label: 'Home',
                  url: '',
                },
              ],
            },
          },
          // -------------------------Admin Course-------------------------
          {
            path: 'course/:id/:courseName',
            component: AdminCourseComponent,
            data: {
              title: 'course',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                { label: '{{courseName}}', url: '' },
              ],
            },
          },
          // -------------------------Admin Course View Feedback Report-------------------------
          {
            path: 'course/viewFeedback/report/:id/:courseName/:module',
            component: AdminReportComponent,
            data: {
              title: 'report',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                {
                  label: '{{courseName}}',
                  url: '/admin/home/course/:id/:courseName',
                },
                {
                  label: 'Feedback',
                  url: '/admin/home/course/viewFeedback/:id/:courseName/:module',
                },
                { label: 'Report', url: '' },
              ],
            },
          },
          // -------------------------Admin Course View Feedback-------------------------
          {
            path: 'course/viewFeedback/:id/:courseName/:module',
            component: AdminCourseFeedbackComponent,
            data: {
              title: 'viewFeedback',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                {
                  label: '{{courseName}}',
                  url: '/admin/home/course/:id/:courseName',
                },
                { label: 'Feedback', url: '' },
              ],
            },
          },
          // -------------------------Admin Course Create Feedback-------------------------
          {
            path: 'course/createFeedback/:id/:courseName/:module',
            component: AdminCreateFeedbackComponent,
            data: {
              title: 'createFeedback',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                {
                  label: '{{courseName}}',
                  url: '/admin/home/course/:id/:courseName',
                },
                { label: 'Create Feedback', url: '' },
              ],
            },
          },
          // -------------------------Admin Course Edit Feedback-------------------------
          {
            path: 'course/editFeedback/:id/:courseName/:module',
            component: AdminEditFeedbackComponent,
            data: {
              title: 'editFeedback',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                {
                  label: '{{courseName}}',
                  url: '/admin/home/course/:id/:courseName',
                },
                { label: 'Edit Feedback', url: '' },
              ],
            },
          },
          // -------------------------Admin Course Feedback Form Preview-------------------------
          {
            path: 'course/feedbackFormPreview/:id/:courseName/:module',
            component: AdminFeedbackFormPreviewComponent,
            data: {
              title: 'feedbackFormPreview',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                {
                  label: '{{courseName}}',
                  url: '/admin/home/course/:id/:courseName',
                },
                {
                  label: 'Edit Feedback',
                  url: '/admin/home/course/editFeedback/:id/:courseName/:module',
                },
                { label: 'Preview', url: '' },
              ],
            },
          },
          // -------------------------Admin Instructor-------------------------
          {
            path: 'instructor/:id/:instructorName',
            component: AdminInstructorComponent,
            data: {
              title: 'instructor',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                { label: '{{instructorName}}', url: '' },
              ],
            },
          },
          // -------------------------Admin Instructor Ongoing Course-------------------------
          {
            path: 'instructor/:iid/:instructorName/ongoingCourse/:id/:courseName',
            component: AdminInstructorOngoingCourseComponent,
            data: {
              title: 'ongoingCourse',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                {
                  label: '{{instructorName}}',
                  url: '/admin/home/instructor/:iid/:instructorName/',
                },
                { label: '{{courseName}}', url: '' },
              ],
            },
          },
          // -------------------------Admin Instructor Upcoming Course-------------------------
          {
            path: 'instructor/:iid/:instructorName/upcomingCourse/:id/:courseName',
            component: AdminInstructorUpcomingCourseComponent,
            data: {
              title: 'upcomingCourse',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                {
                  label: '{{instructorName}}',
                  url: '/admin/home/instructor/:iid/:instructorName/',
                },
                { label: '{{courseName}}', url: '' },
              ],
            },
          },
          // -------------------------Admin Participant-------------------------
          {
            path: 'participant/:id/:participantName',
            component: AdminParticipantComponent,
            data: {
              title: 'participant',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                { label: '{{participantName}}', url: '' },
              ],
            },
          },
          // -------------------------Admin Participant Enrolled Course-------------------------
          {
            path: 'participant/:pid/:participantName/enrolledCourse/:id/:courseName',
            component: AdminParticipantEnrolledCourseComponent,
            data: {
              title: 'enrolledCourse',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                {
                  label: '{{participantName}}',
                  url: '/admin/home/participant/:pid/:participantName',
                },
                { label: '{{courseName}}', url: '' },
              ],
            },
          },
          // -------------------------Admin Participant Course Application-------------------------
          {
            path: 'participant/:pid/:participantName/application/:id/:courseName',
            component: AdminParticipantCourseApplicationComponent,
            data: {
              title: 'application',
              breadcrumb: [
                { label: 'Home', url: '/admin/home' },
                {
                  label: '{{participantName}}',
                  url: '/admin/home/participant/:pid/:participantName',
                },
                { label: '{{courseName}}', url: '' },
              ],
            },
          },
        ],
      },
    ],
  },
  // --------------------------------------------------End of Admin Page--------------------------------------------------

  // --------------------------------------------------Unknown Page--------------------------------------------------
  { path: '**', redirectTo: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
