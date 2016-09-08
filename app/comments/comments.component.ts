// TODO: Add downvote

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from './comments.service';

@Component({
    templateUrl: 'app/comments/comments.component.html',
    providers: [CommentsService]
})
export class CommentsComponent implements OnInit {

    // Todo: either show loading message or resolve data before creating the component
    currentPost: any;
    id: any;

    constructor(private route: ActivatedRoute, private commentsService: CommentsService) {}

    ngOnInit() {
        this.id = this.route.params['value'].comment;
        this.commentsService.getPostWithComments(this.id)
                            .subscribe(data => this.currentPost = data, error => console.log(error));
    }

    // TODO: enhace addComment
    addComment(comment: String) {
        if(comment.length == 0)
            return;
        
        this.commentsService.addComment(this.id, comment, 'anonymous')
                .subscribe(data => this.currentPost.comments.push(data), 
                            error => console.log(error));
    }

    incrementCommentVote(comment) {
        this.commentsService.upvote(comment).subscribe(
            data => {
                var index = this.currentPost.comments.indexOf(comment);
                this.currentPost.comments[index] = data;
            },
            error => console.log(error)
        );
    }
}