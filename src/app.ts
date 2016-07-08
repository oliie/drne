import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'App/Views/welcome', nav: true, title: 'Welcome' },
            { route: 'users', name: 'users', moduleId: 'App/Views/users', nav: true, title: 'Github Users' },
            { route: 'child-router', name: 'child-router', moduleId: 'App/Views/child-router', nav: true, title: 'Child Router' }
        ]);

        this.router = router;
    }
}
