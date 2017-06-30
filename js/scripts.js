//Business logic//
var token = "bd6d25878528c8f00e0f5900e4c037106ec8db91";

function Git() {}

exports.getRepos = function(){
  $.get('http://api.github.com/users/daneden?access_token=' + token).then(function(response) {
    console.log(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message)
  });
};




//User interface//
var Repos = require('./../js/scripts.js').getRepos;
$(document).ready(function() {
  var reposDisplayed = new Repos();
  $('#getuser').click(function() {
    var user = $('#userid').val();
    $('#userid').val("");
    reposDisplayed.getRepos(city);
  });
});
