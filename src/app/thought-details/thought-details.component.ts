import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-thought-details',
  templateUrl: './thought-details.component.html',
  styleUrls: ['./thought-details.component.css']
})
export class ThoughtDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input() Thepost:Post =
    {
    title:'Breakfast',
    thought:'I love a good omlette'
  }

  @Output() remove: EventEmitter<Post> = new EventEmitter<Post>();

  changeTitle:string = '';
  changeThought:string = '';
  editPost: boolean = false;
 
  edit(){
    this.changeTitle = this.Thepost.title,
    this.changeThought = this.Thepost.thought,
    this.editPost = true;
  }
  delete(){
    this.remove.emit(this.Thepost)
  }
  saveChanges(){
    this.Thepost.title = this.changeTitle,
    this.Thepost.thought = this.changeThought
    this.editPost = false;
  }
  cancelChanges(){
    this.editPost = false;
  }
}
