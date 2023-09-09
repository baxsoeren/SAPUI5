sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox'
], function (Controller, JSONModel, formatter, Filter, FilterOperator, Sorter, MessageBox) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		formatter: formatter,
		onInit: function () {
			var oViewModel = new JSONModel(sap.ui.require.toUrl('sap/ui/demo/mock') + '/products.json');
			this.getView().setModel(oViewModel, "view");
		},
		onSearch: function (oEvent) {
			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("OrderNum", FilterOperator.Contains, sQuery));
				// aFilter.push(new Filter("Placenum", FilterOperator.Contains, sQuery));
			}
			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			});
		},
		onSort: function () {
			MessageBox.information("This functionality is not ready yet.", {title: "Aw, Snap!"});
		}
	});
});