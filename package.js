Package.describe({
  summary: "Foundation 5 with Sass support"
});

Package.on_use(function (api) {
  api.use("scss", ['client', 'server']);
  api.imply('scss', ['client', 'server']);
  api.use(['ui', 'jquery', 'templating'], 'client');

  api.add_files([
    "js/vendor/modernizr.js",
    "js/foundation/foundation.js",
    "js/foundation/foundation.abide.js",
    "js/foundation/foundation.accordion.js",
    "js/foundation/foundation.alert.js",
    "js/foundation/foundation.clearing.js",
    "js/foundation/foundation.dropdown.js",
    "js/foundation/foundation.equalizer.js",
    "js/foundation/foundation.interchange.js",
    "js/foundation/foundation.joyride.js",
    "js/foundation/foundation.magellan.js",
    "js/foundation/foundation.offcanvas.js",
    "js/foundation/foundation.orbit.js",
    "js/foundation/foundation.reveal.js",
    "js/foundation/foundation.slider.js",
    "js/foundation/foundation.tab.js",
    "js/foundation/foundation.tooltip.js",
    "js/foundation/foundation.topbar.js",
    "kitchensink.html",
    "foundation.js"
  ], "client");
});

Package.on_test(function(api) {
  api.use("foundation5-sass");
  api.use(["scss", "tinytest", "test-helpers", "templating"]);

  api.add_files([
      "test.html",
      "test.scss",
      "test.js"
    ], "client");
});
