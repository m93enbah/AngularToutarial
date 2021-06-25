import { Injectable } from '@angular/core';
import { IEmployee } from '../Models/employee';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  baseUrl = 'http://localhost:34173/api/Employee';
  employees:IEmployee[];
  employee:IEmployee;
  constructor(private httpClient: HttpClient) { }
 

getEmployees(): Observable<IEmployee[]> {
  const httpOptions = 
  {
    headers: new HttpHeaders({
      'accept':  'application/json'
    })
  };

    return this.httpClient.get<IEmployee[]>(this.baseUrl+'/loadEmployees',httpOptions)
        .pipe(catchError(this.handleError));
}


getEmployee(id: Number): Observable<IEmployee> {
    const httpOptions = 
    {
      headers: new HttpHeaders({
        'accept':  'application/json'
      })
    };
  return this.httpClient.get<IEmployee>(this.baseUrl+'/LoadEmployeeById?EmpID='+id,httpOptions)
      .pipe(catchError(this.handleError));
}

addEmployee(employee: IEmployee): Observable<IEmployee> {
  return this.httpClient.post<IEmployee>(this.baseUrl+'/PostEmployee', employee, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
  .pipe(catchError(this.handleError));
}

updateEmployee(employee: IEmployee): Observable<void> {
  return this.httpClient.put<void>(this.baseUrl+'/PutEmployee?id='+employee.id, employee, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
      .pipe(catchError(this.handleError));
}

deleteEmployee(id: Number): Observable<void> {
  return this.httpClient.delete<void>(this.baseUrl+'/DeleteEmployee?empID='+id)
      .pipe(catchError(this.handleError));
}

deleteSkill(id: Number): Observable<void> {
  debugger;
  return this.httpClient.delete<void>(this.baseUrl+'/DeleteSkill?skillID='+id)
      .pipe(catchError(this.handleError));
}



private handleError(errorResponse: HttpErrorResponse) {
  if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
  } else {
      console.error('Server Side Error :', errorResponse);
  }
  return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
}


}
