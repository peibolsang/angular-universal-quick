import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ToggleComponent } from './toggle.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [],
    providers: [],
    bootstrap: [ToggleComponent]
  })
  
  export class ToggleModule {}