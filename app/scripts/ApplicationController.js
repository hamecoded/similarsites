define(['backbone',
	'backbone_query_params' //used to pass params as the last argument to any route handler
	//'backbone_route_filter'  //provides a before and after route handlers
	], function(Backbone){
	var ApplicationController= Backbone.Router.extend({
	    routes: {
	        "":"main",	 //default
	    },
	    initialize: function(options) {
			this.model= options.model;
			this.listenTo(this.model, "change", this.rewriteUrl);
			//Start the app by setting kicking off the history behaviour.
			//We will get a routing event with the initial URL fragment
			Backbone.router = this;
			Backbone.history.start();
		},
		main: function( params  ) {
			params= params || {};
			if(params.site){
	    		this.model.set( 'site', params.site );
			}
		}

	});
	return ApplicationController;
});
