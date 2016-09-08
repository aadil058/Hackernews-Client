import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template : `
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Flapper News</a>
            </div>
        </div>
    </nav>

    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <router-outlet></router-outlet>
        </div>
    </div>
  `
})

export class AppComponent {
}