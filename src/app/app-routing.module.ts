import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { RealtimeOverviewComponent } from './realtime-overview/realtime-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RealtimeLocationComponent } from './realtime-location/realtime-location.component';
import { RealtimeTrafficSourceComponent } from './realtime-traffic-source/realtime-traffic-source.component';
import { RealtimeContentComponent } from './realtime-content/realtime-content.component';
import { RealtimeEventsComponent } from './realtime-events/realtime-events.component';
import { RealtimeConversionComponent } from './realtime-conversion/realtime-conversion.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'realtime',
    component: RealtimeComponent,
    children:[
      {path: '' , redirectTo: '/overview', pathMatch: 'full' },
      {path: 'overview', component: RealtimeOverviewComponent },
      {path: 'location', component: RealtimeLocationComponent },
      {path: 'traffic', component: RealtimeTrafficSourceComponent},
      {path: 'content', component: RealtimeContentComponent},
      {path: 'events', component: RealtimeEventsComponent},
      {path: 'conversion', component: RealtimeConversionComponent},
      {path: '**', redirectTo: 'realtime', pathMatch: 'full'}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
