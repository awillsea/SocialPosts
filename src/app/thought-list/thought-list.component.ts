import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-thought-list',
  templateUrl: './thought-list.component.html',
  styleUrls: ['./thought-list.component.css']
})
export class ThoughtListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Posts: Post[]=[
    {title:'Cats',thought:'There Cool'},
    {title:'Parker',thought:'She is Crazy'}
  ]

  newTitle:string ='';
  newThought:string ='';

showForm: boolean = false;

  addPost(){
    this.Posts.push({
      title:this.newTitle,
      thought:this.newThought
    });
    this.newTitle = '';
    this.newThought = '';
  }
  cancelPost(){
    this.newTitle = '';
    this.newThought = '';
    this.showForm = false;
  }
  ShowTheForm(){
    this.showForm = true;
  }
  RemovePost(whichPost: Post){
    for(let i=0;this.Posts.length;i++){
      if(this.Posts[i]== whichPost){
        this.Posts.splice(i,1);
        return;
      }
    }
  }

}
