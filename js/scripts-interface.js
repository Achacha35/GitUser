var Repos = require('./../js/scripts.js').reposModule;

$(document).ready(function() {
  var currentReposObject = new Repos();
  $('#getuser').click(function() {
    var username = $('#userid').val();
    console.log(name)
    // $('#userid').val("");
    currentReposObject.getRepos(username);
  });
});
