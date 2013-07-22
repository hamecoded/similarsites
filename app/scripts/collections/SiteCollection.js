define(['backbone', 'models/SiteModel'], function(Backbone, SiteModel) {
   
    var SiteCollection = Backbone.Collection.extend({
    	model: SiteModel,
        initialize: function(){
        }		
    });
   
    return SiteCollection; 
});