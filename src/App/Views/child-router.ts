import {Router, RouterConfiguration} from 'aurelia-router'

export class ChildRouter {
    heading = 'Child Router';
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'App/Views/welcome', nav: true, title: 'Welcome' },
            { route: 'users', name: 'users', moduleId: 'usApp/Views/ers', nav: true, title: 'Github Users' },
            { route: 'child-router', name: 'child-router', moduleId: 'chApp/Views/ild-router', nav: true, title: 'Child Router' }
        ]);

        this.router = router;
    }
}
