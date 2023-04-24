import { Component, inject } from "@angular/core";
import { MyService } from "./shared/data-access/my.service";

@Component({
  selector: "app-root",
  template: `
    <p>Let's load some data!</p>
    <ul>
      <ng-container *ngIf="myService.data.value(); else loading">
        <li *ngFor="let todo of myService.data.value()">
          {{ todo.title }}
        </li>
      </ng-container>
      <ng-template #loading>
        <li *ngIf="!myService.data.error(); else failed">
          They see me loadin'...
        </li>
      </ng-template>
      <ng-template #failed>
        <p>Uh oh... you're on your own buddy:</p>
        <small>
          {{ myService.data.error().message }}
        </small>
      </ng-template>
    </ul>
  `,
  styles: [`small {color: red}`],
})
export class AppComponent {
  myService = inject(MyService);
}
