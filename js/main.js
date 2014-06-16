require.config({
    paths: {
        jquery: 'libs/jquery/jquery.min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

// Initialize app. Since you're in the
// same folder, no need to specify the path of the file app.js
require(['app', 'backbone', 'jquery', 'underscore'], function(App, Backbone, $, _) {
    App.initialize();
});
