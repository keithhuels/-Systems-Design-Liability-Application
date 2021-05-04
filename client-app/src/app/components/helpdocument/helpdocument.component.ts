import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: "app-helpdocument",
  templateUrl: "./helpdocument.component.html",
  styleUrls: ["./helpdocument.component.scss"],
})
export class HelpdocumentComponent implements OnInit {
  constructor(router: Router, private location: Location) {
    router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView();
          }
        }
      }
    });
  }

  ngOnInit(): void {}

  onBackClicked() {
    this.location.back();
  }
}
