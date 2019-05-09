import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { RealtimeOverviewComponent } from './realtime-overview/realtime-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RealtimeLocationComponent } from './realtime-location/realtime-location.component';
import { RealtimeTrafficSourceComponent } from './realtime-traffic-source/realtime-traffic-source.component';
import { RealtimeContentComponent } from './realtime-content/realtime-content.component';
import { RealtimeEventsComponent } from './realtime-events/realtime-events.component';
import { RealtimeConversionComponent } from './realtime-conversion/realtime-conversion.component';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RealtimeComponent,
    RealtimeOverviewComponent,
    PageNotFoundComponent,
    RealtimeLocationComponent,
    RealtimeTrafficSourceComponent,
    RealtimeContentComponent,
    RealtimeEventsComponent,
    RealtimeConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCz8ohv96hqj_4JmaP_SBt90sU23d3qBiY'
    }),
    GoogleChartsModule.forRoot('AIzaSyCPaXmYrffVdZar7YHnt7Jj8W7FUOI_OhM')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
