import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpOptionsInterceptor } from './common/services/http.options.interceptor';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgHttpLoaderModule,
    CoreModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyC79q-pUc8WbTxviL8GCu9agKR4Tl6PDEI'
        , libraries: ['geometry']
      })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpOptionsInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
