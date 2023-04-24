import { Injectable, computed, effect, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  EMPTY,
  catchError,
  delay,
  filter,
  map,
  materialize,
  of,
  switchMap,
  tap,
} from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: "root",
})
export class MyService {
  http = inject(HttpClient);

  dataNotifications = toSignal(
    this.getFromAPIError().pipe(
      map((result) => ({value: result, error: undefined})),
      catchError((err) => of({value: undefined, error: err}))
    )
  )
  dataError = computed(() => this.dataNotifications()?.error?.message);
  data = computed(() => this.dataNotifications()?.value);

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
