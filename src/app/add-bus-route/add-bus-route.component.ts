import { Component } from '@angular/core';
import { Transit, TransitService } from '../transit.service';

@Component({
  selector: 'app-add-bus-route',
  templateUrl: './add-bus-route.component.html',
  styleUrls: ['./add-bus-route.component.css']
})

export class AddBusRouteComponent {
  transit: Transit = {
    transitNo: 0,
    source: '',
    destination: '',
    arrivalTime: '',
    departureTime: ''
  };

  constructor(private transitService: TransitService) {}

  onSubmit() {
    this.transitService.createTransit(this.transit).subscribe((transit) => {
      console.log('Transit added', transit);
      this.transit = {
        transitNo: 0,
        source: '',
        destination: '',
        arrivalTime: '',
        departureTime: ''
      };
    });
  }
}
