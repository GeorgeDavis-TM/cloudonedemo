import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { WelcomePageComponent } from  './components/welcome-page/welcome-page.component';
import { EnvironmentPageComponent } from './components/environment-page/environment-page.component';
import { AttacksPageComponent } from './components/attacks-page/attacks-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { UploadFormPageComponent } from './components/upload-form/upload-form.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'environment', component: EnvironmentPageComponent },
  { path: 'attacks', component: AttacksPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'upload', component: UploadFormPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
