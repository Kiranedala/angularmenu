import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DateService, RefreshService, UrlService, UtilService, SharedLibraryModule, CarouselService, MessagesService, ModalService, ShareDataService, SideNavComponent } from 'w2020-shared-library';
import { SidebarModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { BlockUIModule } from 'primeng/components/blockui/blockui';
import { GrowlModule } from 'primeng/components/growl/growl';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {CacheService, LocalStorageServiceModule} from "ng2-cache-service";
import { MainMenuComponent } from './main-menu/main-menu.component';




@NgModule({
   declarations: [
      AppComponent,
      MainMenuComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      SidebarModule,
      BlockUIModule,
      GrowlModule,
      AppRoutingModule,
      
   ],
   providers: [
      CarouselService,
      DateService,
      MessagesService,
      ModalService,
      //ReceivingService,
      RefreshService,
      UrlService,
      UtilService,
      CookieService,
      ShareDataService,
      CacheService,
      //CustomCacheService
     
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
