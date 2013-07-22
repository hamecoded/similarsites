define(['backbone'], function(Backbone){
	var AsideBarView = Backbone.View.extend({
		initialize:function(options){
			var thi$= this;
			$(document).on('keydown', "#searchbox", function(e){
				var code = (e.keyCode ? e.keyCode : e.which);
				 if(code == 13) { //Enter keycode
					var siteUrl= e.target.value;
			        Backbone.history.navigate(siteUrl ? "?site=" + siteUrl : "", {trigger:true});
				 }
			});
		    this.listenTo(this.model, 'change:site', this.render);
		},
		events:{
		    'click .site.well .close':function(source) {
		        var siteUrl = $(source.target).parent().attr('data-url');
		        this.model.removeSite(siteUrl);
		        Backbone.history.navigate("", {trigger:true});
		    },
		    'click .site.well':function(source) {
		        var siteUrl = source.target.getAttribute('data-url');
    	        Backbone.history.navigate(siteUrl ? "?site=" + siteUrl : "", {trigger:false});
    	        this.model.set('site', siteUrl);
		        //Cancel the regular event handling so that we won't actual change URLs
		        //We are letting Backbone handle routing
		        return false;
		    }
		},
		//Each time the routes change, we refresh the navigation
		//items.
		render:function(){
		   var currentSite = this.model.get('site');
		   this.$el.empty();
		   var template = _.template('<li class="site well <%=active%>"' + 
		   	  ' data-url="<%=site%>">' +
			  '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
			  '<i class="icon-globe"></i><%=site%>' +
			'</li>');
		   var el2= this.$el; 
		   this.model.get('sites').each( function( siteModel ){
		   		var site= siteModel.get('site');
		   		if(site){
					el2.append(template( {
		       			site: site,
		       			active: currentSite === site ? 'active' : ''} ) );
		   		}
		   });
		}
	});
	return AsideBarView;
});
