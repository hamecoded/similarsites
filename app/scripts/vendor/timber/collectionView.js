define([
	'backbone'
], function (Backbone) {
	var CollectionView = Backbone.View.extend({
		// 'render' can be overidden to hold any view logic
		// and use methods: renderModel & renderCollection
		render: function(options) {
			return this.renderCollection(options);
		},

		/**
		 * renders a collection of models by a given view
		 * @param  {object} options (optional) - optional flags to expose an "api" for the method
		 *                          - {dom} target (optional) - the target element to render the views
		 *                          - {boolean} dispose - false if you want to keep the rendered views
		 *
		 * @return {Backbone.CollectionView}
		 */
		renderCollection: function(options) {
			options = options || {};
			options.target = options.target || this.$el;
			options.collection = options.collection || this.collection;

			//- reset views
			if (!options || (options && !options.keep)) {
				this.disposeViews();
			}

			//- if there is a collection and a view then render it
			if (options.collection && this.view) {
				this._views = options.collection.map(this._createView, this);
				options.target.append( this._views );
			}
			return this;
		},

		_createView: function(model) {
			var indexOfNewView = this._views.length;
			this._views.push(new this.view({
				model: model
			}));
			return this._views[indexOfNewView].render().$el;
		},

		// removes views created by the renderCollection method
		disposeViews: function () { 
			_.invoke(this._views, 'destroy');
			this._views = [];
		},

		dispose: function () {
			this.undelegateEvents();
			this.stopListening();
			this.remove();
		},

		destroy: function () {
			this.disposeViews();
			this.dispose();
		}
	});

	return CollectionView;
});