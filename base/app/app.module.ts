import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

/* third_party */
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { RootReducer } from './state/state.store';
import { OwlModule } from 'ngx-owl-carousel';

/* third_party_material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* components */
import { Routing } from './routers/routing.route'; 
import { MainComponent } from './views/main.view';
import { BaseComponent } from './base.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalOverlayComponent } from './components/modal/modal.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './views/home.view';
import { LogosComponent } from './components/logos/logos.component';
import { MobileAppsComponent } from './components/mobile-apps/mobile-apps.component';
import { PreludeComponent } from './components/prelude/prelude.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

/* services */
import { CommunicationService } from './services/communication.service';
import { ParallaxDirective } from './directives/parallax.directive';
import { LoaderService } from './services/loader.service';

/* modules */
import { ContactFormModule } from './components/contact-form/contact-form.module';
import { QuoteFormModule } from './components/quote-form/quote-form.module';
import { HttpInterceptorService } from './services/httpinterceptor.service';
import { IntroComponent } from './components/intro/intro.component';
import { ServicesComponent } from './components/services/components/services.component';


@NgModule({
    declarations: [
        ServicesComponent,
        TestimonialsComponent,
        MobileAppsComponent,
        BannerComponent,
        ContactComponent,
        LogosComponent,
        HomeComponent,
        HeaderComponent,
        IntroComponent,
        BaseComponent, 
        HeaderComponent,
        FooterComponent,
        MainComponent,
        ModalOverlayComponent,
        ParallaxDirective,
        PreludeComponent
    ],
    exports: [
    ],
    imports: [
        OwlModule,
        QuoteFormModule,
        ContactFormModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        Routing,
        NgReduxModule,
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers: [
        LoaderService,
        { 
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService, multi: true 
        },
        CommunicationService
    ],
    bootstrap:  [
        BaseComponent
    ]
})

export class AppModule {

    constructor(
        private _store: NgRedux<any>
    ) {
        this._store.configureStore(RootReducer, {}); 
    }
}
