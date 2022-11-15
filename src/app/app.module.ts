import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star/star.component';
import { TitlesComponent } from './titles/titles.component';
import { CapitalizePipe } from './titles/capitalize.pipe';
import { ZippyComponent } from './zippy.componet';
import { LikeComponent } from './like.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    StarComponent,
    TitlesComponent,
    CapitalizePipe,
    LikeComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
