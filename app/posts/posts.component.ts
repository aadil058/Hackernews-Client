import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'app/posts/posts.component.html',
    providers: [PostsService]
})
export class PostsComponent implements OnInit {
    
    posts: any;

    form: FormGroup;
    title: FormControl;
    link: FormControl;

    constructor(private PostService: PostsService, private fb: FormBuilder) {
       this.title = new FormControl("", Validators.required);
       this.link = new FormControl();
       this.form = fb.group({
            title: this.title,
            link: this.link
        })
    }

    ngOnInit() {
        this.PostService.getAll().subscribe(
            data => this.posts = data.sort((a, b) => b.upvotes - a.upvotes),
            error => console.log(error),
            () => console.log(this.posts)
        );
    }

    incrementVote(post) {
        post.upvotes += 1;
        this.posts = this.posts.sort((a, b) => b.upvotes - a.upvotes);
        this.PostService.upvotePost(post).subscribe(
            data => console.log(data),
            error => this.incrementVoteErrorHandler(post, error)
        );
    }

    incrementVoteErrorHandler(post, error) {
        console.log(error); // can show error message to user, if upvote not succcesful like Stackoverflow
        post.upvotes -= 1;
        this.posts = this.posts.sort((a, b) => b.upvotes - a.upvotes);
    }

    // One thing that i can do is to show the post without making the request and make its comment and upvote disable unless
    // post object succesfully get saved in the database (i.e., save same object with _id and remove placeholder save)
    // error handling is also easy in this case, we can add a retry button to the side of post if it fails
    onSubmit() {
        this.PostService.addNewPost(this.title.value, this.link.value).subscribe(
            data => this.posts = this.posts.concat(data),
            error => console.log(error),
            () => { this.title.updateValue(null); 
                    this.title.markAsUntouched();
                    this.title.markAsPristine();
                    this.link.updateValue(null); }
        );
    }
}