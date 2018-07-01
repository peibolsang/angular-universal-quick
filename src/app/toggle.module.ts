import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ToggleComponent } from './toggle.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToggleService } from './toggle.service';
import { FormsModule } from '@angular/forms'

@NgModule({
    declarations: [],
    imports: [FormsModule],
    providers: [ToggleService],
    bootstrap: [ToggleComponent]
  })
  
  export class ToggleModule {}