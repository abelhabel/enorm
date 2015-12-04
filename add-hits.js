var Controller = require('controller/controller');
var data = require('data/hit');
var structure = require('structure/hit');
var parent = document.createElement('div');
parent.className = 'search-results';
document.body.appendChild(parent);
for(var i = 50; i > 0; i -= 1){
  new Controller(data, structure, parent);
}
