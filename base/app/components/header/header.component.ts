import { CommunicationService } from 'app/services/communication.service';
import { ModalInfo, ModalCommand, ModalType, ModalFormType, ModalLocation } from './../../entities/modal.entity';
import { Component, OnInit, ViewChild, ElementRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
    @ViewChild('header') header: ElementRef;

  constructor(
    private _communicationService: CommunicationService
  ) { }

  ngOnInit() {    
/*     setTimeout((e) => {
      this.requestQuoteForm();
    }, 1000); */
  }

  public ngAfterContentChecked(): void {

  }

  requestQuoteForm() {

    let modalInfo: ModalInfo = new ModalInfo(
        `Request quote`,
        ``,
        ModalCommand.Open,
        ModalType.Alert,
        "OK",
        "",
        null,
        ModalFormType.QuoteRequestForm,
        "bookmarkModal",
        {
            Width: '100',
            Height: '400'
        },
        ModalLocation.Center
    );

    this._communicationService.ShareModalInfoData(modalInfo);

}
}
