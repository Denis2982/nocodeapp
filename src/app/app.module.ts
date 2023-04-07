import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TopicsComponent } from './components/topics/topics.component';
import { StudentsComponent } from './components/students/students.component';
import { LernComponent } from './core/lern/lern.component';
import { StatisticComponent } from './core/statistic/statistic.component';
import { InfoComponent } from './core/info/info.component';
import { InstructorComponent } from './core/instructor/instructor.component';
import { FaqComponent } from './core/faq/faq.component';
import { StartComponent } from './core/start/start.component';
import { AccordionComponent } from './core/accordion/accordion.component';
import { StudComponent } from './core/stud/stud.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TopicsComponent,
    StudentsComponent,
    LernComponent,
    StatisticComponent,
    InfoComponent,
    InstructorComponent,
    FaqComponent,
    StartComponent,
    AccordionComponent,
    StudComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
