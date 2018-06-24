import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {makeStateKey, TransferState} from '@angular/platform-browser'


const MYPOSTDATA_KEY = makeStateKey('myPostData')


class PostData{
  public userId;
  public id;
  public title;
  public body;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  public myPostData:PostData[];

  constructor(
    private http: HttpClient,
    private state: TransferState
  ){}
  

  ngOnInit(){
   
   this.myPostData = this.state.get<PostData[]>(MYPOSTDATA_KEY,null)
   console.log("Current KEY = " + this.myPostData)

   if(!this.myPostData){
      console.log("Updating KEY ...")
      this.http.get<any>('https://jsonplaceholder.typicode.com/posts?userId=1')
      .map(res => <PostData[]>res)
      .subscribe(data => {
        this.myPostData = data;
        this.state.set(MYPOSTDATA_KEY,this.myPostData)
        console.log("New KEY = "+this.state.get(MYPOSTDATA_KEY,this.myPostData))
     });
    }
 }
}
