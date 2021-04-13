import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { EnvironmentPageComponent } from './components/environment-page/environment-page.component';
import { AttacksPageComponent } from './components/attacks-page/attacks-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { UploadFormPageComponent } from './components/upload-form/upload-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    WelcomePageComponent,
    EnvironmentPageComponent,
    AttacksPageComponent,
    AboutUsPageComponent,
    UploadFormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
