UI.registerHelper('initFoundation', function() {
  Meteor.defer(function() {
     $(document).foundation();
   });
});