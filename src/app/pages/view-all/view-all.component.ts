import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DatePipe, NgFor } from '@angular/common';
import { MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule, NgFor, MatCard, MatCardHeader, MatCardAvatar, 
            MatCardTitle, MatIcon, MatCardActions, MatCardContent, MatCardSubtitle, MatGridTile, MatCardImage, MatGridList, DatePipe],
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']  
})
export class ViewAllComponent implements OnInit  {
allPosts: any;
posts: any[] = [];


  constructor(
    private router: Router,
    private postService: PostService,
    private snackBar: MatSnackBar){}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (err) => {
        console.error('Something Went Wrong !!!', 'Ok', err, { duration: 3000 });
      }
    });
  }
}
