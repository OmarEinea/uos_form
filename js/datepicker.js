(function (namespace, $) {
	"use strict";

	var DatePicker = function () {
		// Create reference to this instance
		var d = this;
		// Initialize app when document is ready
		$(document).ready(function () {
			d.initDatePicker();
		});

	};
	var p = DatePicker.prototype;

	p.initDatePicker = function () {
		if (!$.isFunction($.fn.datepicker)) { return; }
		$('#year-picker').datepicker({autoclose: true, todayHighlight: true, minViewMode: 2});
		$('#day-picker').datepicker({autoclose: true, todayHighlight: true, format: "yyyy/mm/dd"});
	};

	namespace.DatePicker = new DatePicker;
}(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
