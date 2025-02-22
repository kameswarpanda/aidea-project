import { Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { CoursesComponent } from '../pages/courses/courses.component';
import { FaqsComponent } from '../pages/faqs/faqs.component';
import { HomeComponent } from '../pages/home/home.component';
import { ServicesComponent } from '../pages/services/services.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { AnnouncementComponent } from '../pages/announcement/announcement.component';
import { PlaygroundComponent } from '../pages/playground/playground.component';
import { UserProfilesComponent } from '../pages/user-profiles/user-profiles.component';
import { MyLearningsComponent } from '../pages/my-learnings/my-learnings.component';
import { CommunityComponent } from '../pages/community/community.component';
import { GenAiToolsComponent } from '../pages/courses/gen-ai-tools/gen-ai-tools.component';
import { MachineLearningComponent } from '../pages/courses/machine-learning/machine-learning.component';
import { CbseAiModulesComponent } from '../pages/courses/cbse-ai-modules/cbse-ai-modules.component';
import { PromptEngineeringComponent } from '../pages/courses/prompt-engineering/prompt-engineering.component';
import { AiRoboticsComponent } from '../pages/courses/ai-robotics/ai-robotics.component';
import { RealLifeProjectComponent } from '../pages/courses/real-life-project/real-life-project.component';

export const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'gen-ai-tools', component: GenAiToolsComponent },
  { path: 'machine-learning', component: MachineLearningComponent},
  { path: 'cbse-ai-modules', component: CbseAiModulesComponent},
  { path: 'prompt-engineering', component: PromptEngineeringComponent},
  { path: 'ai-robotics', component: AiRoboticsComponent},
  { path: 'real-life-projects', component: RealLifeProjectComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'progress', component: ProgressComponent },
      { path: 'dashboard/courses', component: CoursesComponent },
      // { path: 'gen-ai-tools', component: GenAiToolsComponent },
      { path: 'my-learnings', component: MyLearningsComponent },
      { path: 'community', component: CommunityComponent },
      { path: 'playground', component: PlaygroundComponent},
      { path: 'announcements', component: AnnouncementComponent },
      { path: 'profile', component: UserProfilesComponent },
    ]
  },
  
  { path: '**', redirectTo: 'home' }, // Wildcard route for 404
];
