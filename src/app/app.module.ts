import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star.component';
import { TitlesComponent } from './titles/titles.component';
import { CapitalizePipe } from './titles/capitalize.pipe';
import { ZippyComponent } from './zippy.componet';
import { LikeComponent } from './like.component';
import { ZippyContainerComponent } from './zipContian';
import { SwitchCaseComponent } from './switchCaseComponent';
import { ClickComponent } from './examples/clickComponent/click.component';
import { InputComponent } from './examples/inputComponent/input.component';
import { SolidComponent } from './softUni/solidComponent/solid.component';

const myProvider: Provider = {
  // useValue: 123,
  useClass: class MyClass {
    constructor() {
      console.log('Nameless class was constructed')
    }
  },
  provide: 'Test'
};

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    StarComponent,
    SwitchCaseComponent,
    TitlesComponent,
    CapitalizePipe,
    LikeComponent,
    ZippyComponent,
    ZippyContainerComponent,
    ClickComponent,
    InputComponent,
    SolidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    myProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
