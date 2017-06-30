//Business logic//
var token = require('./../.env').token;


Repos=function() {};

Repos.prototype.getUser = function(username, displayFunction) {
  $.get('http://api.github.com/users/' + username + 'access_token=' + token).then(function(users) {
    displayFunction(users);
  }).fail(function(error) {
    $('.result').text(error.responseJSON.message)
  });
}


Repos.prototype.getRepos = function(username, displayFunction) {
  $.get('http://api.github.com/users/' + username + '/repos?access_token=' + token).then(function(repos) {
    displayFunction(repos);
  }).fail(function(error) {
    $('.result').text(error.responseJSON.message)
  });
}

exports.reposModule=  Repos;



//User interface//
