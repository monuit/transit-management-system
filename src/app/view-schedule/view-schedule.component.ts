import { Component, OnInit } from '@angular/core';
import { Transit } from '../transit.service';
import { TransitService } from '../transit.service';

// Use the Component decorator to define the ViewScheduleComponent properties
@Component({
  selector: 'app-view-schedule', // Define the custom element tag for this component
  templateUrl: './view-schedule.component.html', // Specify the HTML template file for this component
  styleUrls: ['./view-schedule.component.css'] // Specify the CSS stylesheets for this component
})
// Define ViewScheduleComponent class and implement OnInit interface
export class ViewScheduleComponent implements OnInit {
  transits: Transit[] = []; // Declare an array to store transit data
  // Declare an array of displayedColumns to specify table column names
  displayedColumns: string[] = ['transitNo', 'source', 'destination', 'arrivalTime', 'departureTime'];

  // Inject TransitService instance into the component through the constructor
  constructor(private transitService: TransitService) { }

  // ngOnInit lifecycle hook to perform actions when the component is initialized
  ngOnInit(): void {
    this.getTransits(); // Call getTransits method to fetch transit data
  }

  // Define getTransits method to fetch transit data from the TransitService
  getTransits(): void {
    this.transitService.getAllTransits().subscribe(transits => this.transits = transits);
  }
}

