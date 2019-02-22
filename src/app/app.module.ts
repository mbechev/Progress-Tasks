import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridComponent } from './kendo-grid-component/grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './service/core.module';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [GridComponent]
})
export class AppModule { }
