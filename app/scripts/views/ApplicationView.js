define(['backbone',
	'views/SiteView', 'views/AsideBarView', 'models/SiteModel'
], function(Backbone, SiteView, AsideBarView, SiteModel ){
	
	var ApplicationView = Backbone.View.extend({
		el: '#main_section',
		initialize:function(options){
			this.currentView = null;
			this.listenTo(this.model, 'change:site', this.render);

			this.asidebar= new AsideBarView({
				el: $('#menu ul'), 
				model: this.model
			});

		},
		render:function(){
			this.currentView && this.currentView.remove();
			var site = this.model.get('site');

			var siteModel= new SiteModel( site );
			this.currentView = new SiteView({ 
				model: siteModel 
			});
			this.model.addSite(siteModel);
			this.$el.html( this.currentView.el );
		}
	});
	return ApplicationView;

});
