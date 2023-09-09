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
		}
	};
});