import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { ParallaxDirection } from 'app/directives/parallax.model';
import { MenuCtrl } from 'app/helpers/MenuCtrl';
import { OwlCarousel } from 'ngx-owl-carousel';
import { LoaderService } from 'app/services/loader.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewChecked {
  public ParallaxDirection = ParallaxDirection;
  public MenuCtrl = MenuCtrl;

  @ViewChild('owlElement') owlElement: OwlCarousel;
  @ViewChildren('containerBanner') containerBanner: QueryList<HTMLDivElement>;
  @ViewChildren('bannerContainer') bannerContainer: QueryList<HTMLDivElement>;


  constructor(
      private loaderService: LoaderService
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
      const wHeight = (<any>window).innerHeight;
      const wWidth = (<any>window).innerWidth;

      this.containerBanner.toArray().forEach((container: any) => {
          container.nativeElement.style.minHeight = (wHeight-75)+'px';
      });
      // this.owlElement.next([20000]);

      this.bannerContainer.toArray().forEach((container: any) => {
          if (wWidth > 992) {
              container.nativeElement.style.minHeight = wHeight+'px';
          } else {
              container.nativeElement.style.minHeight = 'auto';
          }
      });
  }

  logSelectedDate(event: any) {
      console.log(event)
  }
  

}
