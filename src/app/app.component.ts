import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { MyService } from "./shared/data-access/my.service";

@Component({
  selector: "app-root",
  template: `<pre>{{users()}}</pre>`,
  styles: [],
})
export class AppComponent {
  myService = inject(MyService);

  users = toSignal(this.myService.getUsersGood());
}
