define(
    [
    'jquery',
    'underscore',
    'backbone',
    'views/projects/list',
    'views/users/list'
], function($, _, Backbone, ProjectListView, UserListView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            '/projects': 'showProjects',
            '/users': 'showUsers',

            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {
        var app_router = new AppRouter();

        app_router.on('showProjects', function() {
            // Call render on the module we loaded in via the dependency array
            // 'views/projects/list'
            var projectListView = new ProjectListView();
            projectListView.render();
        });

        app_router.on('showUsers', function() {
            // Call render on the module we loaded in via the dependency array
            // 'views/users/list'
            var userListView = UserListView();
            userListView.render();
        })

        app_router.on('defaultAction', function(actions){
            // We have no matching route, lets just log what the URL was
            console.log("No Route:", actions);
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
