import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';

import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing],
    declarations: [AppComponent, PostsComponent, CommentsComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}