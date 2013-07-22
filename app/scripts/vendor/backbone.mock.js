define(['backbone'], function() {
   	var sync = window.Backbone.sync;

   	if (require.restMode === "mock") {

	    window.Backbone.sync = function() {
	    	var restUrl = _.result(arguments[1], 'url'),
	    		activateMock = _.result(arguments[1], 'mock');

	    	if (activateMock) {
		    	restUrl = restUrl.split("?")[0].split("rest").pop();
		    	restUrl = '/mock' + restUrl + '.json';
		    	if (_.isString(activateMock)) {
		    		restUrl = activateMock;
		    	}
				arguments[1].url = restUrl;
	    	}

	    	return sync.apply(this, arguments);
	    };

   	}
});