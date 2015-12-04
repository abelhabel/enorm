var Controller = require('controller/controller');
var data = require('data/hit');
var template = require('templates/hit');
var parent = document.createElement('div');

parent.id = 'search-results';

document.body.appendChild(parent);
window.controllers = [];
for(var i = 50; i > 0; i -= 1){
  data.id = i;
  window.controllers.push(new Controller(data, template, parent));
}

setTimeout(function(){
  data.title = "Franks Corner";
  window.controllers[0].update(data);
},1000);
