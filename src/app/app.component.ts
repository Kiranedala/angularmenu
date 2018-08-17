import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Winsupply Main Menu';



  gotoReceiving(){
    window.open("http://localhost:8082/#/itembin-details","_self");
    
  }

  gotoSoe(){
    window.open("http://windev1:11011/profoundui/auth/genie?workstnid=TESTID&skin=wob&macro=SalesPersonInq&suffixid=1");
  }

}
