import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  delay,
  of,
  switchMap,
} from "rxjs";
import { toSignalWithError } from "@joshmorony/signal-with-error";

@Injectable({
  providedIn: "root",
})
export class MyService {
  http = inject(HttpClient);
  data = toSignalWithError(this.getFromAPIError())

  getFromAPI() {
    return of(null).pipe(
      delay(2000),
      switchMap(() =>
        this.http.get<any>("https://jsonplaceholder.typicode.com/todos")
      )
    );
  }

  getFromAPIError() {
    return of(null).pipe(
      delay(2000),
      switchMap(() =>
        this.http.get<any>("https://jsonplaceholde.typicode.com/todos")
      )
    );
  }
}
