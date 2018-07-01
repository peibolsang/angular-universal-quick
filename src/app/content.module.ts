import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ContentComponent } from './content.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [],
    providers: [],
    bootstrap: [ContentComponent]
  })
  
  export class ContentModule {}