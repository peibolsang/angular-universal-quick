import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {makeStateKey, TransferState} from '@angular/platform-browser'
import { ToggleService } from './toggle.service';


const MYPOSTDATA_KEY = makeStateKey('myPostData')
const MYUSERS_KEY = makeStateKey('myUsers')
const MYTODOS_KEY = makeStateKey('myTodos')

class PostData{
  public userId;
  public id;
  public title;
  public body;
}

class Geo{
  public lat;
  public lng;
}
class Address{
  public street;
  public suite;
  public city;
  public zipcode;
  public geo:Geo;
}

class Company{
  public name;
  public catchPhrase;
  public bs;
}
class User{
  public id;
  public name;
  public username;
  public email;
  public address:Address;
  public phone;
  public website;
  public company:Company;

}

class Todo{
  public userId;
  public id;
  public title;
  public completed;
}

@Component({
  selector: 'app-api-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit
{
  valueSelected:String = "POSTS";
  
  public myPostData:PostData[];
  public myUsers:User[];
  public myTodos:Todo[];

  constructor(
    private http: HttpClient,
    private state: TransferState,
    private toggleService: ToggleService
  ){}
  
  ngOnInit(){
    
    //We need to do this first because toggle change event is not triggered on page load. Obviously.
    if (this.valueSelected==="POSTS") this.processPOSTS()
      else if (this.valueSelected==="USERS") this.processUSERS()
      else if (this.valueSelected==="TODOS") this.processTODOS()

    this.toggleService.change.subscribe(apivalue=>{
      //This is logged only on Browser because event happens only on the browser
      console.log("CONTENTCOMPONENT.EVENT.SUBSCRIBE().(apivalue)="+apivalue);
      this.valueSelected=apivalue;
      if (this.valueSelected==="POSTS") this.processPOSTS()
      else if (this.valueSelected==="USERS") this.processUSERS()
      else if (this.valueSelected==="TODOS") this.processTODOS()
    })
 }
 
 private processPOSTS(){
  let URL = 'https://jsonplaceholder.typicode.com/posts?userId=1';

  this.myPostData = this.state.get<PostData[]>(MYPOSTDATA_KEY,null)
  console.log("PROCESSING POSTS. Current KEY = " + this.myPostData)

  //We need to be carefull with this. If we are using the SPA mode, then
  //all subsequent calls happen on the Browser and hence Key is never null in second checks
  //This means APIs are not called!
  if(!this.myPostData){
     console.log("Updating KEY ...")
     
     this.http.get<any>(URL)
     .map(response => <PostData[]>response)
     .subscribe(data => {
       this.myPostData = data;
       this.state.set(MYPOSTDATA_KEY,this.myPostData)
       
       console.log("New KEY = "+this.state.get(MYPOSTDATA_KEY,this.myPostData))
    });
   }
 }

 private processUSERS(){
  let URL = 'https://jsonplaceholder.typicode.com/users';

  this.myUsers = this.state.get<User[]>(MYUSERS_KEY,null)
  console.log("PROCESSING USERS. Current KEY = " + this.myUsers)

  //We need to be carefull with this. If we are using the SPA mode, then
  //all subsequent calls happen on the Browser and hence Key is never null in second checks
  //This means APIs are not called!
  if(!this.myUsers){
     console.log("Updating KEY ...")
     
     this.http.get<any>(URL)
     .map(response => <User[]>response)
     .subscribe(data => {
       this.myUsers = data;
       this.state.set(MYUSERS_KEY,this.myUsers)
       
       console.log("New KEY = "+this.state.get(MYUSERS_KEY,this.myUsers))
    });
   }
 }

 private processTODOS(){
  let URL = 'https://jsonplaceholder.typicode.com/todos?userId=1'

  this.myTodos = this.state.get<Todo[]>(MYTODOS_KEY,null)
  console.log("PROCESSING TODOS. Current KEY = " + this.myTodos)

  //We need to be carefull with this. If we are using the SPA mode, then
  //all subsequent calls happen on the Browser and hence Key is never null in second checks
  //This means APIs are not called!
  if(!this.myTodos){
     console.log("Updating KEY ...")
     
     this.http.get<any>(URL)
     .map(response => <Todo[]>response)
     .subscribe(data => {
       this.myTodos = data;
       this.state.set(MYTODOS_KEY,this.myTodos)
       
       console.log("New KEY = "+this.state.get(MYTODOS_KEY,this.myUsers))
    });
   }
 }
}
