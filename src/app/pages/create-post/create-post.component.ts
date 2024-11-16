import { Component, Inject, NgModule } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatChipGrid, MatChipInput, MatChipInputEvent, MatChipRemove, MatChipRow, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostService } from '../../service/post.service';


@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [NgFor, NgIf, HttpClientModule, ReactiveFormsModule, MatCardModule, MatCard, MatFormFieldModule, MatButtonModule, 
            MatChipGrid, MatInput, MatChipsModule, MatChipRow, MatIconModule, MatChipInput, MatChipRemove],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  postForm!: FormGroup;
  tag:string[] = [];
  tags:any;
  showRemoveButton: boolean = true;
  

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
    private snackBar: MatSnackBar){}

    ngOnInit(){
      this.postForm = this.fb.group({
        name: [null, Validators.required],
        content: [null, [Validators.required, Validators.maxLength(5000)]],
        img: [null, Validators.required],
        postedBy: [null, Validators.required]
      });
    };

    add(event: any){
      const value = (event.value || '').trim();
      if(value){
        this.tags.push(value);
      };

      event.chipInput!.clear();
    };

    remove(tag: any){
      const index = this.tags.indexOf(tag);

      if (index>=0) {
        this.tags.splice(index,1);
      };
    };

    createPost(){
      const data = this.postForm.value;
      data.tags = this.tags;

      this.postService.createNewPost(data).subscribe(()=>{
        this.snackBar.open("Post Created !!!", "Ok", { duration: 3000 });
      }, ()=>{
        this.snackBar.open("Something Went Wrong !!!", "Ok", { duration: 3000 });
      });
    };

    createNewPost(){}
};

