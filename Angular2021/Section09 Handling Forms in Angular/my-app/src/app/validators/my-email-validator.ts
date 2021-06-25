import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MyEmailValidator implements AsyncValidator{
  constructor() {}
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise<any>((resolve,reject) => {
      setTimeout(() => {
        if(control.value == "test@test.com"){
          resolve({'emailIsForbidden':true});
        }
        else{
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
}
