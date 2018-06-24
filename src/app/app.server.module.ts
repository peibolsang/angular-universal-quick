import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TransferState } from '@angular/platform-browser';
import { ToggleModule } from './toggle.module';
import { ToggleComponent } from './toggle.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ToggleModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  providers: [ToggleComponent],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
