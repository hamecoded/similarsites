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
        timber: 'vendor/timber/timber',
        bootstrap: 'vendor/bootstrap',
        
        jquery: '../components/jquery/jquery',
        backbone: '../components/backbone-amd/backbone-min',
        backbone_query_params : '../components/backbone-query-parameters/backbone.queryparams',
        underscore: '../components/underscore-amd/underscore-min'
    }
});
