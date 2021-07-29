import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { MyLoaderService } from "./core/services/loading.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  
  constructor(public myLoaderService: MyLoaderService) {}

  ngOnInit() {}
}
