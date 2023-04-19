// Import HttpClient module for making HTTP requests
import { HttpClient } from '@angular/common/http';
// Import Injectable decorator to make the class injectable
import { Injectable } from '@angular/core';
// Import Observable from rxjs library for handling asynchronous data streams
import { Observable } from 'rxjs';

// Define Transit interface for specifying the structure of a transit object
export interface Transit {
  transitNo: number;
  source: string;
  destination: string;
  arrivalTime: string;
  departureTime: string;
}

// Use the Injectable decorator to make the class available for dependency injection
@Injectable({
  providedIn: 'root'
})
// Define TransitService class for managing transit-related operations
export class TransitService {
  // Declare apiUrl property for storing the API endpoint
  private apiUrl = '/api/transits';

  // Inject HttpClient instance into the service through the constructor
  constructor(private http: HttpClient) { }

  // Define getAllTransits method to fetch all transits from the API
  getAllTransits(): Observable<Transit[]> {
    return this.http.get<Transit[]>(this.apiUrl);
  }

  // Define getTransitById method to fetch a specific transit by its ID
  getTransitById(id: number): Observable<Transit> {
    return this.http.get<Transit>(`${this.apiUrl}/${id}`);
  }

  // Define createTransit method to create a new transit using the API
  createTransit(transit: Transit): Observable<Transit> {
    return this.http.post<Transit>(this.apiUrl, transit);
  }

  // Define updateTransit method to update an existing transit with a given ID
  updateTransit(id: number, transit: Transit): Observable<Transit> {
    return this.http.put<Transit>(`${this.apiUrl}/${id}`, transit);
  }

  // Define deleteTransit method to delete a transit by its ID
  deleteTransit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
