(function (namespace, $) {
	"use strict";

	var Components = function () {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function () {
			o.initialize();
		});

	};
	var p = Components.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		this.initInputMask();
		this.initWizard();
		this.initDatePicker();
	};

	// =========================================================================
	// InputMask
	// =========================================================================

	p.initInputMask = function () {
		if (!$.isFunction($.fn.inputmask)) {
			return;
		}
		$(":input").inputmask();
		$(".form-control.dollar-mask").inputmask('$ 999,999,999.99', {numericInput: true, rightAlignNumerics: false});
		$(".form-control.euro-mask").inputmask('€ 999.999.999,99', {numericInput: true, rightAlignNumerics: false});
		$(".form-control.time-mask").inputmask('h:s', {placeholder: 'hh:mm'});
		$(".form-control.time12-mask").inputmask('hh:mm t', {placeholder: 'hh:mm xm', alias: 'time12', hourFormat: '12'});
	};

	// =========================================================================
	// Form Wizard
	// =========================================================================

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

	// =========================================================================
	// Date Picker
	// =========================================================================

	p.initDatePicker = function () {
		if (!$.isFunction($.fn.datepicker)) { return; }
		$('#year-picker').datepicker({autoclose: true, todayHighlight: true, minViewMode: 2});
		$('#day-picker').datepicker({autoclose: true, todayHighlight: true, format: "yyyy/mm/dd", startView: 2});
	};

	// =========================================================================

	namespace.Components = new Components;
}(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
