var Repos = require('./../js/github.js').reposModule;


var displayData = function(repos) {
  $('ul#repoUrl').empty();
  repos.forEach(function(repo) {
    $('ul#repoUrl').append("<li><a href='" + repo.html_url + "'>" + repo.name + "</a>: " + repo.description + "; created on " + repo.created_at + "</li > ");
  });
};


$(document).ready(function() {
  event.preventDefault();
  var searchUsers = new Repos();
  $('#searchName').click(function() {
    var username = $('#userName').val();
    console.log(username);
    searchUsers.getUser(username, displayUser);
    searchUsers.getRepos(username, displayData);
  });
});
