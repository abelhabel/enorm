function Controller(data, structure, parent){
  var that = this;
  this.data = data || {};
  this.view = {};
  var view = this.view;

  var tags = structure.tags;
  var container = structure.container;

  view.container = makeTag(container);

  (parent || document.body).appendChild(view.container);
  function loopKeys(tags, parent) {
    tags.order.forEach(function(key) {

      view[key] = makeTag(tags[key]);
      if(that.data[key]) view[key][tagMap.get(tags[key].tag)] = that.data[key];
      parent.appendChild(view[key]);
      if(tags[key].tags) loopKeys(tags[key].tags, view[key]);
    });
  }
  loopKeys(tags, view.container);
}
var tagMap = {
  innerHTML: ['div', 'span', 'section'],
  value: ['input', 'li'],
  src: ['img', 'script'],
  get: function(tag) {
    for(var key in tagMap) {
      if(tagMap[key].indexOf(tag) !== -1) {
        return key;
      }
    }
  }
};
function makeTag(options) {
  var tag = document.createElement(options.tag);
  tag.className = options.className;
  tag.id = options.id;
  if(options.data) {
    options.data.forEach(function(data) {
      tag.setAttribute(data.name, data.value);
    });
  }
  return tag;
}

module.exports = Controller;
