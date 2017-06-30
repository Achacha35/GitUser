var Repos = require('./../js/scripts.js').reposModule;
var displayData= function(user){
  $('ul#repoUrl').empty();
  repos.forEach(function(repo) {
    $('ul#repoUrl').append("<li><a href='" + repo.html_url + "'>" + repo.name + "</a>:" + repo.decription + "; created on " + repo.created_at + "</li>");
  });
});


$(document).ready(function() {
  var searchUsers = new Repos();
  $('#searchName').click(function() {
    var username = $('#userid').val();
    console.log(username)
    // $('#userid').val("");
    searchUsers.getUser(username,displayFunction);
    searchUsers.getRepos(username, displayData);
  });
});
