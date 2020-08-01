import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InputVideoComponentComponent } from './input-video-component/input-video-component.component';
import { ProcessVideoService } from './process-video.service';
import { OutputVideoComponentComponent} from './output-video-component/output-video-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InputVideoComponentComponent,
    OutputVideoComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProcessVideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
