import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PostsService {

    ApiBaseUrl = "http://localhost:3001/";

    constructor(private http: Http) {}

    getAll() {
        return this.http.get(this.ApiBaseUrl).map(res => res.json());
    }

    upvotePost(post) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.ApiBaseUrl + "post/upvote", JSON.stringify({ id: post._id }), { headers: headers })
                    .map(res => res.json());
    }

    addNewPost(title, link) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        link = (link === "") ? undefined : link;
        var post = { title: title,  link: link };
        return this.http.post(this.ApiBaseUrl, JSON.stringify({ post }), { headers: headers }).map(res => res.json());
    }
}