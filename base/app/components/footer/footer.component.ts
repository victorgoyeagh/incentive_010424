import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public currentYear: string = undefined;

  constructor() { }

  ngOnInit() {
    
      //set year
      this.currentYear = (new Date()).getFullYear().toString();
  }

}
