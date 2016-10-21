
/*
* View Source
* Generates copy/pastable markup from actual rendered markup.
*
* Copyright (c) 2016 Filament Group, Inc.
* Licensed under the MIT, GPL licenses.
 */
;(function($){
	var defaultInstantiationSelecor = ".js-source-code";

	$.widget('llapgoch.sourceCode', {
		// Any option can also be overridden by using it on the container's data attribute, prepended with identifier
		options: {
			identifier: "sourcecode",
			/* Use this to identify where to get the source code from */
			targetSelector: '.code-target',
			/* Use this to tell us where to create the target selector */
			destinationSelector: '',
            wrapHTML: '<div class="llapgoch-source-code"><code></code></div>',
			innerWrap: '<pre>'
		},
        
        $source: null,

		_create: function(){
			this._super();
		},

		_getSnippet: function(){
			return $(this.options.snippetSelector, this.element);
		},

		_getLocalOption: function(option){
			var localOption =  this.options.identifier + option.replace(/^([a-z])/, function(a){return a.toUpperCase()});
			var local = this.element.data(localOption);

			if(local){
				return local;
			}

			return this.options[option];
		},

		_init: function() {
			this._createSource();
		},

		_createSource: function() {
            if(this.$source){
                return;
            }

            var codeContainerSelector = this._getLocalOption('codeContainerSelector');
			var targetContent = $(this._getLocalOption('targetSelector'), this.element).html();

			this.$source = $(this.options.innerWrap).text(targetContent);

            // Create the snippet after the original if codeContainerSelector has not been set
            if(codeContainerSelector && $(codeContainerSelector, this.element).size()){
            	$(codeContainerSelector, this.element).append(this.$source);
            }else{
				this.$source.insertAfter($(this._getLocalOption('targetSelector'), this.element));
			}

			this.$source.wrap($(this.options.wrapHTML));
		},

		_removeSource: function(){
			if(this.$source){
				this.$source.remove();
				this.$source = null;
			}
		},

		_destroy: function(){
			this._removeSource();
		},

		update: function(){
			this._removeSource();
			this._createSource();
		}
	});

	$(document).on('ready', function(){
		$(defaultInstantiationSelecor).sourceCode();
	});
}(jQuery));



