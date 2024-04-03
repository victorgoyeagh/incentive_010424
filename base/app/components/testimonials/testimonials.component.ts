import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.scss"]
})
export class TestimonialsComponent implements OnInit {
  public options = {
    loop: true,
    rtl: false,
    items: 3,
    dots: true,
    nav: false,
    margin: 10,
    responsiveClass: true,
    stageMargin: 50,
    slideBy: 1,
    rewind: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      }
    }
  };

  constructor() {}

  ngOnInit() {}
}
