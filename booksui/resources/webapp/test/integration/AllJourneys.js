jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Author in the list
// * All 3 Author have at least one books

sap.ui.require([
	"sap/ui/test/Opa5",
	"bookstore/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"bookstore/test/integration/pages/App",
	"bookstore/test/integration/pages/Browser",
	"bookstore/test/integration/pages/Master",
	"bookstore/test/integration/pages/Detail",
	"bookstore/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "bookstore.view."
	});

	sap.ui.require([
		"bookstore/test/integration/MasterJourney",
		"bookstore/test/integration/NavigationJourney",
		"bookstore/test/integration/NotFoundJourney",
		"bookstore/test/integration/BusyJourney",
		"bookstore/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});