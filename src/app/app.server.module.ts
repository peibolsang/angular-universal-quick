import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TransferState } from '@angular/platform-browser';
import { ToggleModule } from './toggle.module';
import { ToggleComponent } from './toggle.component';
import { ContentModule } from './content.module';
import { ContentComponent } from './content.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ToggleModule,
    ContentModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  providers: [ToggleComponent,ContentComponent],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
