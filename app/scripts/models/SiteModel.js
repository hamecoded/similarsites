define(['backbone'], function(Backbone) {
   
    var SiteModel = Backbone.Model.extend({
		defaults: {
			site: "",
			Category: "NA",
		    CategoryRank: 0,
		    Country: 0,
		    CountryRank: 0,
		    FavIcon: "", //full url
		    GlobalRank: 0,
		    LastAvgTrafficReach: 0,
		    SimilarSites: [
		    ]
		},
		url: function(){
    		var url = "http://api.similarweb.com/site/" + this.get('site') + "/rankoverview?userkey=a6fd04d833f2c28ce7c30dc957bf481e";
    	   	return url;
            //return "/mock/sites.json";
    	},
		initialize: function(url) {
			this.set('site', url);
			this.fetch({reset: true});


		}
    });
   
    return SiteModel; 
});