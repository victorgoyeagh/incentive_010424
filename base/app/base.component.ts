import { LoaderService } from './services/loader.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, QueryList, ViewChildren } from '@angular/core';
import { MenuCtrl } from './helpers/MenuCtrl';
import { ParallaxDirection } from './directives/parallax.model';
import {OwlCarousel} from 'ngx-owl-carousel';

@Component({
    selector: 'e-root',
    templateUrl: './base.template.html'
})

export class BaseComponent implements OnInit { 
    
    constructor(
        private loaderService: LoaderService
    ) {
    }

    ngOnInit() {


      //apply responsive classes of menu
      new MenuCtrl("toggleBtn", "toggleNav", "toggleHeader", "toggleMain", true);

      this.loaderService.myObservable.next(true);
    }

}


