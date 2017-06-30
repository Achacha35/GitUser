//Business-Logic//
var apiKey = require('./../.env').apiKey;

Repos = function() {};
Repos.prototype.getUser = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(users) {
    displayFunction(users);
  }).fail(function(error) {
    $('.showUser').text("<h2> " + name + "</h2>" + " is " + error.responseJSON.message + "." +
      "ENTER A VALID USERNAME");
  });
};

Repos.prototype.getRepos = function(name, displayFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(repos) {
    displayFunction(repos);
  }).fail(function(error) {
    $('.showUser').text("NO REPOSITORY FOUND FOR" + username + " is " + error.responseJSON.message + "." +
      "ENTER A VALID USERNAME");
  });
};

exports.reposModule = Repos;
