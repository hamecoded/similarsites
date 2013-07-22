/*global require*/
'use strict';

require([
    'backbone', 
    'models/ApplicationModel',
    'views/ApplicationView',
    'ApplicationController'
], function (Backbone, 
    ApplicationModel, ApplicationView, ApplicationController ) {
    var model= new ApplicationModel;
    new ApplicationView({model: model});
    new ApplicationController({model: model});

    $(document).ready(function() {
        //animate aside
        $("aside")
                .mouseenter( 
                    function(e){
                        $("#main").addClass("opened").removeClass("closed");
                    }
                )
                .mouseleave( 
                    function(e){
                        $("#main").addClass("closed").removeClass("opened");
                    }
                );
        $("#logo")
                .mouseenter( 
                    function(e){
                        $("#logo").addClass("bounce");
                    }
                )
                .mouseleave( 
                    function(e){
                        $("#logo").removeClass("bounce");
                    }
                );
       
    });
});