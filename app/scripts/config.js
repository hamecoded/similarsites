'use strict';
require.restMode = "mock";
require.config({
    deps: ['main'],

    shim: {
        underscore: {
            exports: '_'
        },
        backbonesrc: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        backbone_query_params: {
            deps: [
                'backbonesrc'
            ]
        },
        backbone_route_filter: {
            deps: [
                'backbonesrc'
            ]
        },
        backbone_safe: {
            deps: [ 'backbonesrc' ]
        },
        backbone_mock: {
            deps: [ 'backbonesrc' ]
        }
    },
    
    paths: {
        timber: 'vendor/timber/timber',
        bootstrap: 'vendor/bootstrap',
        
        jquery: '../components/jquery/jquery',
        backbonesrc: '../components/backbone-amd/backbone',
        backbone_mock: 'vendor/backbone.mock',
        backbone: 'vendor/backbonepkg',
        backbone_query_params : '../components/backbone-query-parameters/backbone.queryparams',
        backbone_route_filter : '../components/backbone.routefilter/dist/backbone.routefilter',
        text: '../components/requirejs-text/text',
        underscore: '../components/underscore-amd/underscore'
    }
});
