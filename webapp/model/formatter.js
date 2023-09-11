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
					return "00";
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
					return "99";
			}
		}
	};
});