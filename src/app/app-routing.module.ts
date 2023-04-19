import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusRouteComponent } from './add-bus-route/add-bus-route.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';

const routes: Routes = [
  { path: 'add-bus-route', component: AddBusRouteComponent },
  { path: 'view-schedule', component: ViewScheduleComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Optional: set view-schedule as the default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
