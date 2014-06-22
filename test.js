Tinytest.add("foundation - Styles should be applied", function (test) {
    var component = UI.render(Template.foundationTestTemplate);
    var tI = component.templateInstance;
    UI.insert(component, document.body);

    test.equal(getStyleProperty(tI.find('a'), "background-color"), "rgb(0, 140, 186)");

    $('.foundationTestTemplate').remove();
});

Tinytest.add("foundation - Kitchen Sink should be available", function (test) {
    var onscreenDiv = UI.render(Template.kitchensink);
    test.isTrue(onscreenDiv.isInited);
});

Tinytest.add("foundation - JavaScript extensions should be loaded", function (test) {
    test.isTrue(typeof $.fn.foundation !== 'undefined');
});