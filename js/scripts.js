//Business logic//
var token = "bd6d25878528c8f00e0f5900e4c037106ec8db91";
function Repos() {}

Repos.prototype.getRepos = function(username) {
  $.get('http://api.github.com/users/' + username +   'access_token=' + token).then(function(response) {
    console.log(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message)
  });
}

exports.reposModule=  Repos;



//User interface//
