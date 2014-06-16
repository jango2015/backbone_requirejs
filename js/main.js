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
