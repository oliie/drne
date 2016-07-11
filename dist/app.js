define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'App/Views/welcome', nav: true, title: 'Welcome' },
                { route: 'users', name: 'users', moduleId: 'App/Views/users', nav: true, title: 'Github Users' },
                { route: 'child-router', name: 'child-router', moduleId: 'App/Views/child-router', nav: true, title: 'Child Router' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=app.js.map
