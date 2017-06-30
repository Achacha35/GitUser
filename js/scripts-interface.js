var Repos = require('./../js/scripts.js').weatherModule;

$(document).ready(function() {
  var currentReposObject = new Repos();
  $('#getuser').click(function() {
    var username = $('#userid').val();
    $('#userid').val("");
    currentReposObject.getRepos(username);
  });
});
