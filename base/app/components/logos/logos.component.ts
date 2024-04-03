import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-logos",
  templateUrl: "./logos.component.html"
})
export class LogosComponent implements OnInit {
  public options = {
    loop: true,
    items: 3,
    dots: false,
    nav: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        nav: true
      },
      600: {
        items: 5,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  };

  public logoData = [
    {
      name: "ge",
      className: "ge",
      image: "gehealthcare.png"
    },
    {
      name: "santander",
      className: "santander",
      image: "santander.png"
    },
    {
      name: "intu",
      className: "intu",
      image: "intu.png"
    },
    {
      name: "cognizant",
      className: "cognizant",
      image: "cognizant.png"
    },
    {
      name: "optiwell",
      className: "optiwell",
      image: "optiwell.png"
    },
    {
      name: "which",
      className: "which",
      image: "which.png"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
