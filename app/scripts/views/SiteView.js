define(['backbone'], function(Backbone) {
   
    var SiteView = Backbone.View.extend({
    	template: _.template($("#siteTmpl").html()),
		initialize:function(options){
			this.listenTo(this.model,'change', this.render); 

		},
		render: function(){
			this.$el.html(this.template(this.model.attributes));
    		return this;
		}

    });
   
    return SiteView; 
});