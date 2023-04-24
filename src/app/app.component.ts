import { Component, computed, effect, inject } from "@angular/core";
import { MyService } from "./shared/data-access/my.service";

@Component({
  selector: "app-root",
  template: `
    <p>Let's load some data!</p>
    <ul>
      <ng-container *ngIf="myService.data(); else loading">
        <li *ngFor="let todo of myService.data()">
          {{ todo.title }}
        </li>
      </ng-container>
      <ng-template #loading>
        <li *ngIf="!myService.dataError(); else failed">
          They see me loadin'...
        </li>
      </ng-template>
      <ng-template #failed>
        <p>Uh oh... you're on your own buddy:</p>
        <small>
          {{ myService.dataError() }}
        </small>
      </ng-template>
    </ul>
  `,
  styles: [`small {color: red}`],
})
export class AppComponent {
  myService = inject(MyService);
}
