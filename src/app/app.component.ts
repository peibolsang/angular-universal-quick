import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import {makeStateKey, TransferState} from '@angular/platform-browser'


const TITLE_KEY = makeStateKey('title')

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
  public title='Angular Universal';

  constructor(
    private http: HttpClient,
    private state: TransferState
  ){}
  

  ngOnInit(){
   console.log("A ver qué demonios tiene TITLE_KEY "+this.state.get(TITLE_KEY,this.title))
   this.title = this.state.get(TITLE_KEY,this.title)
   console.log("Pues resulta que title es " + this.title)
   if(this.title==="Angular Universal"){
      this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .map(data => <PostData>data)
      .subscribe(data => {
        console.log("data retrieved from API");
        this.title = data.title;
        console.log("Current Title = "+this.title+" "+new Date())
        this.state.set(TITLE_KEY,this.title)
        console.log("Current TITLE KEY = "+this.state.get(TITLE_KEY,this.title))
     });
    }
 }
}
