var Git = require('./../js/scripts.js').gitModule;

$(document).ready(function() {
  var currentUser = new Git();
  $('#getuser').click(function() {
    var user = $('#userid').val();
    $('#userid').val("");
    currentUser.getGit(city);
  });
});
