var Repos = require('./../js/scripts.js').getRepos;
$(document).ready(function() {
  var reposDisplayed = new Repos();
  $('#getuser').click(function() {
    var user = $('#userid').val();
    $('#userid').val("");
    reposDisplayed.getRepos(city);
  });
});
