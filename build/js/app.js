(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Repos = require('./../js/scripts.js').getRepos;
$(document).ready(function() {
  var reposDisplayed = new Repos();
  $('#getuser').click(function() {
    var user = $('#userid').val();
    $('#userid').val("");
    reposDisplayed.getRepos(city);
  });
});

},{"./../js/scripts.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
