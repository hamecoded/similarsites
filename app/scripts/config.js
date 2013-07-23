'use strict';
require.config({
    deps: ['main'],

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        backbone_query_params: {
            deps: ['backbone']
        }
    },
    
    paths: {
        bootstrap: 'vendor/bootstrap',
        
        jquery: '../components/jquery/jquery',
        backbone_query_params : '../components/backbone-query-parameters/backbone.queryparams',
        backbone: '../components/backbone/backbone-min',
        underscore: '../components/underscore/underscore-min'
    }
});
