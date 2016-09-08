import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'comments/:comment',
        component: CommentsComponent
    }
]

export const routing = RouterModule.forRoot(routes);