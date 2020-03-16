import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { SemiDonutComponent } from './SemiDonut/semi-donut.component';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SemiDonutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    MatIconModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
