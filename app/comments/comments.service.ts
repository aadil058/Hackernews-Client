import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CommentsService {

    ApiBaseUrl = "http://localhost:3001/";

    constructor(private http: Http) {}

    getPostWithComments(id) {
        return this.http.get(this.ApiBaseUrl + id).map(res => res.json());
    }

    // TODO: Add option to make account for individual user (for that need to add authentication)
    addComment(id, comment, author) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.ApiBaseUrl + id + '/comments', JSON.stringify({ comment: comment, author: author }), { headers: headers }).map(res => res.json());
    }

    upvote(comment) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.ApiBaseUrl + "comment/upvote", JSON.stringify({ id: comment._id }), { headers: headers })
                    .map(res => res.json());
    }
}