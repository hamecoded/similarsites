define(['backbone', 
    'models/SiteModel',
    'collections/SiteCollection',
    ], function( Backbone,  
    SiteModel, SiteCollection ) {
   
    var ApplicationModel = Backbone.Model.extend({
    	defaults: {
    		site : undefined, 
            sites: new SiteCollection,
    	},

        initialize: function() {
            
        },
        addSite: function(siteModel) {
            var similar= this.get('sites').where({ site: siteModel.get('site') } );
            if( similar.length == 0){
                this.get('sites').push( siteModel );                
            }
        },
        removeSite: function(url){
            var siteModel= this.get('sites').where({ site: url } );
            this.get('sites').remove(siteModel);
        },
        fromHash: function(route, params){
            params= params || {};
            this.set('site', params.site, {silent: true});

        }


    });
   
    return ApplicationModel; 
});