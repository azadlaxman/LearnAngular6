import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { LayoutComponent } from './ui/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule
  ],
  providers: [LayoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
