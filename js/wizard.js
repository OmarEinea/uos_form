(function(namespace, $) {
	"use strict";

	var Wizard = function() {
		// Create reference to this instance
		var w = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			w.initWizard();
		});

	};
	var p = Wizard.prototype;

	p.initWizard = function() {
		var o = this;
		$('#wizard').bootstrapWizard({
			onTabShow: function(tab, navigation, index) {
				o._handleTabShow(tab, navigation, index, $('#wizard'));
			}
		});
	};

	p._handleTabShow = function(tab, navigation, index, wizard){
		var total = navigation.find('li').length;
		var current = index + 0;
		var percent = (current / (total - 1)) * 100;
		var percentWidth = 100 - (100 / total) + '%';
		
		navigation.find('li').removeClass('done');
		navigation.find('li.active').prevAll().addClass('done');
		
		wizard.find('.progress-bar').css({width: percent + '%'});
		$('.form-wizard-horizontal').find('.progress').css({'width': percentWidth});
	};
	
	namespace.Wizard = new Wizard;
}(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
