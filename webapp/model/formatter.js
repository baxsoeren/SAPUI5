sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("invoiceStatusA");
				case "B":
					return resourceBundle.getText("invoiceStatusB");
				case "C":
					return resourceBundle.getText("invoiceStatusC");
				case "D":
					return resourceBundle.getText("invoiceStatusD");
				case "E":
					return resourceBundle.getText("invoiceStatusE");
				case "F":
					return resourceBundle.getText("invoiceStatusF");
				default:
					return sStatus;
			}
		},
		statusPercent: function (sStatus) {
			switch (sStatus) {
				case "A":
					return "0";
				case "B":
					return "20";
				case "C":
					return "40";
				case "D":
					return "60";
				case "E":
					return "80";
				case "F":
					return "100";
				default:
					return "Error";
			}
		},
		getDuration: function (startDate, status, endDate) {
			if(startDate != ''){
				if(status == 'F'){
					var startTime = new Date(startDate);
					var endTime = new Date(endDate);
				}else if(startDate != ""){
					var startTime = new Date(startDate);
					var endTime = new Date();
				}	
				var timeSpan = (endTime.getTime() - startTime.getTime())/1000;
				var days = new String(`${timeSpan / 86400}`).split('.');
				var hours = new String(`${('0.' + days[1]) * 24}`).split('.');
				var minutes = new String(`${('0.' + hours[1]) * 60}`).split('.');
				var durationTime = days[0] + ' Tag(e) ' + hours[0] + ' Stunde(n) ' + minutes[0] + ' Minute(n)';
				return durationTime;
			}else{
				return '';
			}
		}
	};
});