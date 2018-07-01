import { Component, HostListener, Input, HostBinding } from "@angular/core";
import { ToggleService } from "./toggle.service";

@Component({
    selector: 'app-api-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.css']
})

export class ToggleComponent{
    
    constructor(
        private toggleService: ToggleService
    ){}
    
    
    api:String="POSTS";

    

    click(value){
        //With this current approach of communicating between TOGGLE and CONTENT components via services
        //we are not using full capabilities of Universal. What we are doing here is building an SPA
        //so that components are communicating via events in the BROWSER, not captured on the SERVER
        //This means that yes, for the first load we are retrieving data and rendering on the SERVER
        //but for subsequent calls after radiobutton click-change, everything is happening on the BROWSER.
        //This is, the subsequent API calls are triggered from the client (SPA)

        //Instead, what we need to do on click-change is perform a navigation, a GET or POST request
        //to the server so this can be intercpeted by the controller on the server (server.ts) and
        //launch the Universal engine (do the API call, render, update the key and transfer to browser)


        this.api=value;
        this.toggleService.toggle(this.api);
    }

    
}