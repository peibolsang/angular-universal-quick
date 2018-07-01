import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ContentComponent } from './content.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToggleService } from './toggle.service';
import { FormsModule } from '@angular/forms'

@NgModule({
    declarations: [],
    imports: [FormsModule],
    providers: [ToggleService],
    bootstrap: [ContentComponent]
  })
  
  export class ContentModule {}