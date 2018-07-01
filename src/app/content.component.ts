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

const URL = 'https://jsonplaceholder.typicode.com/posts?userId=1';

@Component({
  selector: 'app-api-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit
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
      
      this.http.get<any>(URL)
      .map(response => <PostData[]>response)
      .subscribe(data => {
        this.myPostData = data;
        this.state.set(MYPOSTDATA_KEY,this.myPostData)
        
        console.log("New KEY = "+this.state.get(MYPOSTDATA_KEY,this.myPostData))
     });
    }
 }
}
