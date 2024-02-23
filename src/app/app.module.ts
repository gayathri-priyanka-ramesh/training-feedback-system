// --------------------------------------------------Default Imports--------------------------------------------------
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// --------------------------------------------------End of Default Imports--------------------------------------------------

// --------------------------------------------------Required Imports--------------------------------------------------
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NgChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
// --------------------------------------------------End of Required Imports--------------------------------------------------

// --------------------------------------------------Common Components--------------------------------------------------
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ModalComponent } from './components/modal/modal.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataRingComponent } from './components/data-ring/data-ring.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { FeedbackQuestionsComponent } from './components/feedback-questions/feedback-questions.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackResponseTableComponent } from './components/feedback-response-table/feedback-response-table.component';
import { ReportComponent } from './components/report/report.component';
import { ApplicantTableComponent } from './components/applicant-table/applicant-table.component';
// --------------------------------------------------End of Common Components--------------------------------------------------

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

@NgModule({
  declarations: [
    // --------------------------------------------------Common Components--------------------------------------------------
    AppComponent,
    LoginFormComponent,
    ForgotPasswordComponent,
    ModalComponent,
    BreadcrumbComponent,
    FooterComponent,
    DataRingComponent,
    ProgressBarComponent,
    CourseCardComponent,
    FeedbackQuestionsComponent,
    FeedbackFormComponent,
    FeedbackResponseTableComponent,
    ReportComponent,
    ApplicantTableComponent,
    // --------------------------------------------------End of Common Components--------------------------------------------------

    // --------------------------------------------------User Components--------------------------------------------------
    LoginComponent,
    // -------------------------Participant-------------------------
    ParticipantComponent,
    ParticipantHomeComponent,
    ParticipantEnrolledCourseComponent,
    ParticipantCourseComponent,
    ParticipantFeedbackSubmitComponent,
    ParticipantReportComponent,
    ParticipantAppliedCourseComponent,
    ParticipantTrendingCourseComponent,
    // -------------------------End of Participant-------------------------

    // -------------------------Instructor-------------------------
    InstructorComponent,
    InstructorHomeComponent,
    InstructorOngoingCourseComponent,
    InstructorCourseComponent,
    InstructorFeedbackComponent,
    InstructorReportComponent,
    InstructorUpcomingCourseComponent,
    // -------------------------End of Instructor-------------------------

    // -------------------------Admin-------------------------
    AdminComponent,
    AdminLoginComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminCourseComponent,
    AdminCreateFeedbackComponent,
    AdminEditFeedbackComponent,
    AdminFeedbackFormPreviewComponent,
    AdminCourseFeedbackComponent,
    AdminReportComponent,
    AdminInstructorComponent,
    AdminInstructorOngoingCourseComponent,
    AdminInstructorUpcomingCourseComponent,
    AdminParticipantComponent,
    AdminParticipantEnrolledCourseComponent,
    AdminParticipantCourseApplicationComponent,
    // -------------------------End of Admin-------------------------
    // --------------------------------------------------End of User Components--------------------------------------------------
  ],
  imports: [
    // --------------------------------------------------Required Imports--------------------------------------------------
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgDynamicBreadcrumbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      projectId: 'edureview-439ee',
      appId: '1:178347135314:web:df9d6af4967d67fabb6a8b',
      storageBucket: 'edureview-439ee.appspot.com',
      apiKey: 'AIzaSyDhebDsB0LxT2elfYTbR_YBawlfE2_ABsQ',
      authDomain: 'edureview-439ee.firebaseapp.com',
      messagingSenderId: '178347135314',
      measurementId: 'G-NJY9WPCFVM',
    }),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'edureview-439ee',
        appId: '1:178347135314:web:df9d6af4967d67fabb6a8b',
        storageBucket: 'edureview-439ee.appspot.com',
        apiKey: 'AIzaSyDhebDsB0LxT2elfYTbR_YBawlfE2_ABsQ',
        authDomain: 'edureview-439ee.firebaseapp.com',
        messagingSenderId: '178347135314',
        measurementId: 'G-NJY9WPCFVM',
      })
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    NgChartsModule,
    DataTablesModule,
    // --------------------------------------------------End of Required Imports--------------------------------------------------
  ],
  providers: [
    provideClientHydration(),
    ScreenTrackingService,
    UserTrackingService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
