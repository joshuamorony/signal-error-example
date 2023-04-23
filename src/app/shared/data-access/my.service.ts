import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
providedIn: "root"
})
export class MyService {

  getUsersGood(){
    return of(["josh"]).pipe(delay(1000))
  }

  getUsersBad(){
    return of(["josh"]).pipe(
      map(() => { throw new Error("things have most definitely gone wrong")})
    )
  }
}
