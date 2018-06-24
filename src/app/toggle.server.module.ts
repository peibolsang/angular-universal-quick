import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { ToggleComponent } from './toggle.component';
import { TransferState } from '@angular/platform-browser';
import { ToggleModule } from './toggle.module';

@NgModule({
  imports: [
    ToggleModule
  ],
  providers: [],
  bootstrap: [ ToggleComponent ],
})
export class ToggleServerModule {}