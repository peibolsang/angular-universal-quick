import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { ContentComponent } from './Content.component';
import { TransferState } from '@angular/platform-browser';
import { ContentModule } from './content.module';

@NgModule({
  imports: [
    ContentModule
  ],
  providers: [],
  bootstrap: [ ContentComponent ],
})
export class ContentServerModule {}