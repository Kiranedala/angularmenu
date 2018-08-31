// import {environment} from '../environments/environment';
// import {Component, ViewChild, HostListener} from '@angular/core';
// import {SideNavComponent} from 'w2020-shared-library';
// import { Message } from 'primeng/components/common/api';
// import {PlatformLocation} from '@angular/common';
// import {UtilService, ShareDataService, RefreshService} from 'w2020-shared-library';
// // import * as $ from 'jquery';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Winsupply Main Menu';

//   @ViewChild( SideNavComponent )
//   private sideNavComponent: SideNavComponent;

//   environment = '__ENVIRONMENT__';

//   private isBlocked = false;
//   private isBlockedUI = false;

//   private growlSuccessMessages: Message[] = [];
//   private growlErrorMessages: Message[] = [];
//   private growlErrorMessageShow = true;
//   private growlSuccessMessageShow = true;

//   constructor( private refreshService: RefreshService, private utilService: UtilService, private shareDataService: ShareDataService ) {
//     // add this to refresh every X amount of time
//     const self = this
//     this.refreshService.start();
//     shareDataService.blockUIObserver$.subscribe(
//       isBlockUI => {
//         setTimeout(() => {
//           console.log( 'blockUI ### ' + isBlockUI );
//           self.isBlockedUI = isBlockUI;
//         });
//       }
//     );

//     this.shareDataService.showStatusMessage.subscribe( ( item ) => {
//       if ( item[ 0 ].severity === 'error' ) {
//         // On error hide success message
//         self.growlSuccessMessageShow = false;
//         // On error show error message
//         self.growlErrorMessageShow = true;
//         self.growlErrorMessages = item;
//       } else if ( item[ 0 ].severity === 'close' ) {
//         // On action close error message
//         self.growlErrorMessageShow = false;
//       } else {
//         // On success hide error message
//         self.growlErrorMessageShow = false;
//         // On success show success message
//         self.growlSuccessMessageShow = true;
//         self.growlSuccessMessages = item;
//       }
//     } );
//   }

//   toggleBlockUI(): void {
//     if ( this.utilService.applyRemoveBlockUI() ) {
//       this.isBlocked = !this.isBlocked;
//     }
//   }

//   closeSideNav() {
//     // Call child sideNavComponent function to close sidenav
//     this.sideNavComponent.closeSideNav( false );
//   }

//   @HostListener( 'window:resize', [ '$event' ] )
//   onResize( event ) {
//     setTimeout( () => {
//       if ( this.utilService.applyRemoveBlockUI() ) {
//         if ( $( '#side-nav-wrapper' ).hasClass( 'open' ) ) {
//           this.isBlocked = true;
//         }
//       } else {
//         this.isBlocked = false;
//       }
//     }, 100 );
//   }

//   gotoReceiving(){
//     window.open("http://localhost:8082/#/itembin-details","_self");
    
//   }

//   gotoSoe(){
//     window.open("http://windev1:11011/profoundui/auth/genie?workstnid=TESTID&skin=wob&macro=SalesPersonInq&suffixid=1");
//   }

// }


import {Component, HostListener, ViewChild} from '@angular/core';
import {SideNavComponent, UtilService} from "w2020-shared-library";
import {Message} from "primeng/primeng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent {

  @ViewChild( SideNavComponent )
  private sideNavComponent: SideNavComponent;

  environment = '__ENVIRONMENT__';

  protected isBlocked = false;
  protected isBlockedUI = false;

  protected growlSuccessMessages: Message[] = [];
  protected growlErrorMessages: Message[] = [];
  protected growlErrorMessageShow = true;
  protected growlSuccessMessageShow = true;

  constructor( private utilService: UtilService ) {
  }

  toggleBlockUI(): void {
    if ( this.utilService.applyRemoveBlockUI() ) {
      this.isBlocked = !this.isBlocked;
    }
  }

  closeSideNav() {
    // Call child sideNavComponent function to close sidenav
    this.sideNavComponent.closeSideNav( false );
  }
}
