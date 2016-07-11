define(["require", "exports"], function (require, exports) {
    "use strict";
    var ChildRouter = (function () {
        function ChildRouter() {
            this.heading = 'Child Router';
        }
        ChildRouter.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'App/Views/welcome', nav: true, title: 'Welcome' },
                { route: 'users', name: 'users', moduleId: 'usApp/Views/ers', nav: true, title: 'Github Users' },
                { route: 'child-router', name: 'child-router', moduleId: 'chApp/Views/ild-router', nav: true, title: 'Child Router' }
            ]);
            this.router = router;
        };
        return ChildRouter;
    }());
    exports.ChildRouter = ChildRouter;
});

//# sourceMappingURL=child-router.js.map
