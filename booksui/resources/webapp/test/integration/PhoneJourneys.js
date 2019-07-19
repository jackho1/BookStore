jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"bookstore/test/integration/NavigationJourneyPhone",
		"bookstore/test/integration/NotFoundJourneyPhone",
		"bookstore/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});