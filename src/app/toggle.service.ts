import { Injectable, Output, EventEmitter, Input } from "@angular/core";

@Injectable()

export class ToggleService{
    isPosts=false
    isUsers=false
    isTodos=false

    @Output() change: EventEmitter<boolean>=new EventEmitter;


    toggle(apivalue){
         this.change.emit(apivalue)
    }
}