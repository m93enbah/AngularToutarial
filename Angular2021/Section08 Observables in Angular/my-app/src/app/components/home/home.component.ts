import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription, Observable } from 'rxjs';
import { filter, map} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSub: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.firstSub = interval(1000).subscribe((count) => {
    //   debugger;
    //   console.log(count);
    // });

    // //this is called observable that send 
    const customIntervalObservables = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        //we notify the observer that there is new data there sending
        observer.next(count);

        //after the complete happen no longer emit values passed through it
        if (count > 5) {
          observer.complete();
        }

        if (count > 3) {
          //when hit the error method the observable dies and not fire another hit
          //you dont need to unsubscribe
          observer.error(new Error('Count is greater 3!'));
        }

        count++;
        // observer.error();
        // observer.complete();
      }, 1000)
    });

    //we apply observer that listen to each hit coming into
    this.firstSub = customIntervalObservables.pipe(
      filter((data:number) => {return data > 0}),
      map((data:number) => {
      return 'Round '+ (data+1);
    })).subscribe(data => {
      console.log((data+1));
    },
      //it will handle the error hit on the observer part
      error => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('Completed!');
      });
  }

  ngOnDestroy(): void {
    this.firstSub.unsubscribe();
  }
}
