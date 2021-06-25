import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostModel } from './models/post-model';
import { PostService } from './services/post.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: PostModel[] = [];
  isLoading: boolean = false;
  error = null;
  @ViewChild('postForm') form: NgForm;
  sub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onCreatePost(postData: PostModel) {
    this.sub = this.postService.post(postData).subscribe(
      (res) => {
        console.log(res.body);
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.form.reset();
    this.sub = this.postService.delete().subscribe(
      () => {
        this.loadedPosts = [];
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  private fetchPosts() {
    this.isLoading = true;
    this.error = null;
    this.sub = this.postService
      .get()
      .subscribe(
        (posts) => {
          this.isLoading = false;
          this.loadedPosts = posts;
          console.log(posts);
        },
        (error) => {
          this.isLoading = false;
          this.error = error.message;
        }
      );
  }

  onHandleError(){
    this.fetchPosts();
  }
}
